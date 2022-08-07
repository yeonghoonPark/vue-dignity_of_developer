<template>
  <div>
    <TestComponent />
    <CompositionAPIInject />
  </div>
</template>

<script>
import { provide } from '@vue/runtime-core';
import TestComponent from '../components/TestComponent.vue';
import CompositionAPIInject from './CompositionAPIInject.vue';

export default {
  components: { TestComponent, CompositionAPIInject },
  setup() {
    provide('title', "Fuck!! What's the matter!?");
  },
};
</script>
