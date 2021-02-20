In this tutorial we are going to create freshly hand-made unit tests using the
following ingredients:

*   Vue.js
*   eslint
*   Jest
*   Typescript
*   Vuex

I am writing this guide because it is hard to find good full examples on the
internet using all technologies mentioned above together. I will also mention
all parts where it took me the most time to find a solution.

## Eslint configuration

I am usually using the following rulesets in eslint:

```javascript
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    '@vue/typescript'
  ],
}
```

I also suggest that everyone to use them from the very beginning especially
if you are migrating a project into Typescript. The following rules took me
quite some time to correct in code:

*   _typescript-eslint/no-explicit-any_
*   _typescript-eslint/explicity-function-return-type

## Recipe for stateless components

A _stateless_ component is the one that does not include any bindings/ states
from Vuex or other resources. Inputs and outputs are only defined as
_properties_ and _events_ respectively.

Let's assume we have the following small component:

```vue
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class IconBase extends Vue {
  @Prop({
    type: [ String, Number ],
    default: '16px',
  })
  width!: string | number;

  @Prop({
    type: [ String, Number ],
    default: '16px',
  })
  height!: string | number;

  @Prop({
    type: String,
    default: 'default',
  })
  iconColor!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  inverted!: boolean;

  get iconGroupClasses(): string[] {
    return [
      'icon-base__group',
      `icon-base__group--${this.iconColor}`,
    ];
  }

  get rootClasses(): string [] {
    const classes = [ 'icon-base' ];
    if (this.inverted) {
      classes.push('icon-base--inverted');
    }

    return classes;
  }
}
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    role="presentation"
    :class="rootClasses"
  >
    <g :class="iconGroupClasses">
      <slot />
    </g>
  </svg>
</template>

<style lang="scss">
@import '../../scss/variables';

.icon-base {
  display: inline-block;
  transform: rotate(0deg);
  transition: transform .33s ease-out;
  vertical-align: baseline;

  &__group {
    fill: currentColor;

    &--orange {
      fill: $color-theme-orange;
    }

    &--red {
      fill: $color-theme-red;
    }
  }

  &--inverted {
    transform: rotate(180deg);
  }
}
</style>
```

For the component above I created the following unit tests:

```typescript
import IconBase from '@/components/icons/IconBase.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

const defaultProps = {
  iconName: 'testName',
  width: '20px',
  iconColor: 'default',
  inverted: false,
};

describe('IconBase', () => {
  const createWrapper = (propsData= defaultProps): Wrapper<IconBase> => shallowMount(IconBase, {
    propsData,
  });

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').exists(),
    ).toBe(true);
  });

  it('renders width parameter as icon width', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('width'),
    ).toEqual('20px');
  });

  it('renders group color as red', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      iconColor: 'red',
    });

    expect(
      wrapper.find('.icon-base__group').classes(),
    ).toEqual([
      'icon-base__group',
      'icon-base__group--red',
    ]);
  });

  it('inverts icon when invert=true', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      inverted: true,
    });

    expect(
      wrapper.find('.icon-base--inverted').exists(),
    ).toBe(true);
  });
});
```

The most important rules that I used were the following:

*   I am trying to use only once `expect` in each function.
*   I always create the function `createWrapper` with all required inputs
*   I introduce `defaultProps` with the default and required values
*   I use `defaultProps` as the default parameter for `createWrapper`

It took me a long research and experiments to find `Wrapper<Component>` as
return trype for `createWrapper` function. I also introduce the `defaultProps`
in order to have autocompletion, avoid DRY and type checking.

## Recipe for stateful components

A stateful component is a component in my applications and it uses _Vuex_ as
input and output.

Taking the example below:

```vue


```
