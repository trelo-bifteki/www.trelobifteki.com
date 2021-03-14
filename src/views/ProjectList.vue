<script lang="ts">
import {
  Project,
} from '@/store/portofolio/types';
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import {
  namespace,
} from 'vuex-class';

const portofolio = namespace('portofolio');

@Component({
  metaInfo: {
    title: 'Projects',
  },
})
export default class ProjectList extends Vue {

  @portofolio.State
  readonly projects!: Project[];

  @portofolio.Action
  readonly loadProjects!: () => Promise<Project[]>;

  async created(): Promise<void> {
    await this.loadProjects();
  }
}
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
