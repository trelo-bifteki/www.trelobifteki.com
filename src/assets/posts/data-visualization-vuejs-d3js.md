## About

D3 is a visualization library providing all necessary functions and methods
needed to create charts and diagrams. Vue.js is a MVC framework for creating
single page applications (SPA).

The real challenge comes where both D3 and Vue.js are able to manipulate
DOM elements. In this guide, we focus on only using D3 for calculating all
rendering parts required, but we let Vue.js create and modify the DOM.

This is a walkthrough how I first implemented a graph component in Vue.JS
using D3 library.

A demo and samples can be found here

## 👿 The wrong way

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

*   data is **static**
*   we do render only **once** in the beginning
*   styling is **hardcoded**

## 🧙‍♂️ The right rules

### 📜 Prefer _viewBox_ against _width_ & _height_

We want to make our SVG images responsive. By setting _viewBox_ we are able to
scale the SVG image to fill a container.

### 📜 Write SVG template in _template_ section

Most D3js examples on the internet prefer to use `append` function and attach
DOM elements to already existing ones. Since we use Vue.js now for this
scope it is advisable to **only** use `template` section instead.

### 📜 Write stylings in _style_ section

As SVG supports adding classes and styling elements in CSS and it is better to
write styling in `style` section than having hardcoded values on the element.

In this rule there is an **exception**, if you want to introduce a styling as
_property_ to the component.

### 📜 Use _props_ to provide data

Of course we want our component to be reusable and dynamically assign data
into our graph! The challenge in this case

### 📜 Use _computed_ to provide D3 calculations



## 😇 A right way

After applying all rules above the result to the previous example should look
like this:

```typescript
<script>
import * as d3 from 'd3';

export default {
  name: 'RightLineChart',
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      rangeX: [0, 430],
      rangeY: [210, 0],
      width: 500,
      height: 270,
    };
  },
  computed: {
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

In this example:

*   Graph is responsive (like every SVG must be!)
*   A property _data_ can be used to dynamically load data into graph
*   Graph will render any changes into the data automatically
*   CSS classes can be used to override styling (not suggested but possible)
