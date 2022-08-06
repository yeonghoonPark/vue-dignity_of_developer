<template>
  <div>
    <h1>This is Child</h1>
    <ProvIdeInjectChildChild />
  </div>
</template>

<script>
import ProvIdeInjectChildChild from './ProvideInjectChildChild.vue';
export default {
  components: { ProvIdeInjectChildChild },
};
</script>
