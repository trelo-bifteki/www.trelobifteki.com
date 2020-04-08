## About

D3 is a visualization library providing all necessary functions and methods
needed to create charts and diagrams. Vue.js is a MVC framework for creating
single page applications (SPA).

The real challenge comes where both D3 and Vue.js are able to manipulate
DOM elements. In this guide, we focus on only using D3 for calculating all
rendering parts required, but we let D3js create and modify the DOM.

A demo can always be found here and samples can be found here


```typescript
import {
  Component, Prop, Vue
} from 'vue-property-decorator';
import * as d3 from 'd3';
import {
  GeoProjection
} from 'd3';
import {
  Marker
} from '@/store/types';

import greece10mgeojson from '@/assets/greece-10m.geo.json';

@Component
export default class RegionMap extends Vue {
  @Prop({
    default: 450,
    type: Number,
  })
  private height!: number;

  @Prop({
    default: 450,
    type: Number,
  })
  private width!: number;

  @Prop({
    default: 22,
    type: Number,
  })
  private centerX!: number;

  @Prop({
    default: 22,
    type: Number,
  })
  private centerY!: number;

  @Prop({
    default: () => [],
    type: Array,
  })
  markers!: Marker[];

  get viewbox(): string {
    return `0 0 ${this.width} ${this.height}`;
  }

  get projection(): GeoProjection {
    return d3.geoMercator()
      .center([this.centerX, this.centerY])
      .scale(2500)
      .translate([
        this.width / 2,
        this.height / 2,
      ]);
  }

  get countryPath(): string {
    const countryData = greece10mgeojson[0];
    const path = d3.geoPath().projection(this.projection);
    const result = path(countryData as any);
    return `${result}`;
  }

  get circleItems(): any[] {
    let counter = 0;
    return this.markers.map(marker => {
      const projection = this.projection([
        marker.long,
        marker.lat
      ]) ||  [0, 0];
      return {
        id: counter++,
        cx: projection[0],
        cy: projection[1],
      };
    });
  }
}
```
