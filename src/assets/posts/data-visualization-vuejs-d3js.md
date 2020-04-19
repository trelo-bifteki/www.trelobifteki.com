
![Blog post banner](/static/vuejs-d3js-banner.jpeg "Vue.js and D3.js logo")

## About

_D3.js_ is a visualization library providing all necessary functions and methods
needed to create charts and diagrams. _Vue.js_ is a MVC framework for creating
single page applications (SPA).

The real challenge comes where both D3 and Vue.js are able to manipulate
DOM elements. In this guide, we focus on only using D3 for calculating all
rendering parts required, but we let Vue.js create and modify the DOM.

This is a walkthrough how I first implemented a graph component in Vue.JS
using D3 library and how I improved it afterwards.

## 😖 The wrong way

This is actually the first implementation I did inspired by most examples
found on the internet:

```typescript
<script>
import * as d3 from 'd3';
const data = [99, 71, 78, 25, 36, 92];

export default {
  name: 'WrongLineChart',
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
  mounted() {
    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', 500)
      .attr('height', 270)
      .append('g')
      .attr('transform', 'translate(0, 10)');
    const x = d3.scaleLinear().range([0, 430]);
    const y = d3.scaleLinear().range([210, 0]);
    d3.axisLeft().scale(x);
    d3.axisTop().scale(y);
    x.domain(d3.extent(data, (d, i) => i));
    y.domain([0, d3.max(data, d => d)]);
    const createPath = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));
    svg.append('path')
      .attr('d', createPath(data))
      .atrr('fill', 'none')
      .attr('stroke': '#76BF8A')
      .attr('stroke-width': '3px')
  },
};
</script>

<template>
  <div class="demo-chart" />
</template>

<style lang="sass">
.demo-chart
  svg
    margin: 25px
</style>
```

This can work quite well in the beginning, but:

*   graph is **not responsive**
*   data is **static**
*   it renders the graph **once**
*   styling is **hardcoded**

In the end, the component is not reusable

## 🧙‍♂️ 5 simple rules

### Rule 1: 📜 Prefer _viewBox_ against _width_ & _height_

We want to make our SVG images responsive. Width and height limit our
implementation to the dimensions defined. By setting `viewBox` instead,
we are able to scale the SVG image to fill a container.

### Rule 2: 📜 Write SVG template in _template_ section

Most D3js examples on the internet prefer to use `append` function and attach
DOM elements to already existing ones. Since we use Vue.js now for this
scope it is advisable to **only** use `template` section instead.

### Rule 3: 📜 Write stylings in _style_ section

As SVG supports adding classes and styling elements in CSS and it is better to
write styling in `style` section than having hardcoded values on the element.

In this rule there is an **exception**, if you want to introduce a styling as
_property_ to the component.

### Rule 4: 📜 Use _props_ to provide data

Of course we want our component to be reusable and dynamically assign data
into our graph! As most examples with Vue.js and SVG found on the internet,
we set some properties to the component in order to make it dynamic.

Like this example:

```typescript
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<template>
  <svg
    class="svg-demo"
    viewBox="0 0 240 80"
  >
    <text
      class="svg-demo__text"
      x="20"
      y="35"
    >
      {{ title }}
    </text>
  </svg>
</template>

<style lang="scss">
.svg-demo {
  &__text {
    color: red;
  }
}
</style>
```

Now that we set a parameter in `props` area we can also do the following:

`<SvgDemo title="John Snow"></SvgDemo>`

And we are all set!


### Rule 5: 📜 Use _computed_ to provide D3 calculations

The biggest challenge here is to render the graphs everytime `props` changes.

I first tried to use the `append` and `attr` methods from D3 library to render
during `mounted`. In order to render after each change I had to introduce
`watchers`, remove all elements and re-render again.

This solution was already confusing enough for developers and does  not work well together with Vue.js. In the end, tt is better to perform only the  calculations in D3js and bind them with Vue.js instead.

All calculation can be bound directly to DOM using the `computed` functions. This
way the calculation will be invoked every time data information changes.

No worries. Vue.js is smart enough to invoke function only when needed 😉.

## 😇 The right way

After applying all rules above the result to the previous example should look
like this:

```typescript
<script>
import * as d3 from 'd3';

export default {
  name: 'LineChart',
  props: {
    data: {
      required: true,
      type: Array,
    },
    width: {
      default: 500,
      type: Number,
    },
    height: {
      height: 270,
      type: Number,
    }
  },
  data() {
    return {
      padding: 60,
    };
  },
  computed: {
    rangeX() {
      const width = this.width - this.padding;
      return [0, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [0, height];
    },
    path() {
      const x = d3.scaleLinear().range(this.rangeX);
      const y = d3.scaleLinear().range(this.rangeY);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    },
    line() {
      return this.path(this.data);
    },
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    }
  },
};
</script>

<template>
  <svg
    class="line-chart"
    :viewBox="viewBox"
  >
    <g transform="translate(0, 10)">
      <path
        class="line-chart__line"
        :d="line"
      />
    </g>
  </svg>
</template>

<style lang="sass">
.line-chart
  margin: 25px
  &__line
    fill: none
    stroke: #76BF8A
    stroke-width: 3px
</style>
```

Check all these functions in `computed` area! They can be directly used in
`template` now. The most important one is `line`, which actually draws the chart
thanks to _D3.js_. Every time we change `data`, all other function will be
reinvoked and a new value for `line` will be set. The chart will be rerendered
with the new values!

Now, in this example:

*   graph is **responsive** (like every SVG must be!)
*   a property _data_ can be used to **dynamically load data** into graph
*   graph will **render any changes** into the data automatically
*   **CSS classes** can be used to override styling (not suggested but possible)
