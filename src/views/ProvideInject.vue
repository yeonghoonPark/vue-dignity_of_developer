<template>
  <div>
    <ProvIdeInjectChild />
  </div>
</template>

<script>
import ProvIdeInjectChild from '../components/ProvideInjectChild.vue';
export default {
  components: { ProvIdeInjectChild },
  data() {
    return {
      items: ['A', 'B', 'C'],
      test: 'Hello',
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
      items: this.items,
      test: this.test,
    };
  },
};
</script>
