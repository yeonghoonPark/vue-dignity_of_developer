<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'PageTitle',
    },
  },
};
</script>

<style scoped>
.page-title {
  color: #ff0000;
}
</style>
