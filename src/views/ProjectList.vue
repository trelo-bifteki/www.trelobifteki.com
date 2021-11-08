<script lang="ts">
import {
  defineComponent,
} from 'vue';

import {
  createNamespacedHelpers,
} from 'vuex';

const {
  mapActions,
  mapState,
} = createNamespacedHelpers('portofolio');

export default defineComponent({
  name: 'ProjectList',
  metaInfo: {
    title: 'Projects',
  },
  computed: {
    ...mapState([
      'projects',
    ]),
  },
  async created(): Promise<void> {
    await this.loadProjects();
  },
  methods: {
    ...mapActions([
      'loadProjects',
    ]),
  },
})

</script>
<template>
  <div class="project-list">
    <h1 class="project-list__headline">
      <i class="icon-briefcase" />
      Projects
    </h1>

    <div class="project-list__subheader">
      Some personal projects that I am developing through my free-time
    </div>

    <div
      v-for="project in projects"
      :key="project.title"
      class="project-list__project"
    >
      <h2>{{ project. title }}</h2>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/fluid";
  @import "../scss/typography";

  .project-list{
    @include body-container;

    &__headline {
      @include headline;
      color: $color-rainbow-red;
      font-size: $font-size-xxl;
    }

    &__subheader {
      @include paragraph;
    }
  }
</style>
