<script lang="ts">
import {
  defineComponent,
} from 'vue';

import {
  createNamespacedHelpers,
} from 'vuex';

import IconBase from '@/components/icons/IconBase.vue';
import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import ProjectItem from '@/components/ProjectItem.vue';

const {
  mapActions,
  mapState,
} = createNamespacedHelpers('portofolio');

export default defineComponent({
  name: 'ProjectList',
  components: {
    IconBase,
    IconBriefcase,
    ProjectItem,
  },
  metaInfo: {
    title: 'Projects',
  },
  data() {
    return {
      mainIconSize: 24,
    };
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
      <icon-base
        :width="mainIconSize"
        :height="mainIconSize"
      >
        <icon-briefcase />
      </icon-base>
      Portofolio
    </h1>

    <project-item
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/fluid";
  @import "../scss/typography";

  .project-list{
    @include body-container;
    display: flex;
    flex-direction: column;
    padding-bottom: $space-l;

    &__headline {
      @include headline;
      color: $color-rainbow-red;
      font-size: $font-size-xxl;
    }

    &__item {
      position: relative;

      &::after {
        border-left: 5px solid $color-rainbow-orange;
        bottom: 0;
        content: "";
        left: $space-s;
        position: absolute;
        top: 0;
        width: 1rem;
        z-index: 1;
      }
    }

    &__subheader {
      @include paragraph;
    }

    &__properties {
      display: grid;
      grid-template-columns: auto 1fr;
      padding-left: $space;
    }

    &__title {
      @include headline;
      color: $color-rainbow-orange;
      font-size: 130%;
      font-weight: 300;
      padding-left: $space-l;
      position: relative;

      &::after {
        background-color: $color-rainbow-orange;
        border: 3px solid white;
        border-radius: 50%;
        content: "";
        height: 1.2rem;
        left: 1px;
        position: absolute;
        top: 6px;
        width: 1.2rem;
        z-index: 2;
      }
    }

    &__label {
      color: $color-rainbow-green;
      padding: $space-s $space;
    }

    &__value {
      padding: $space-s $space;
    }
  }
</style>
