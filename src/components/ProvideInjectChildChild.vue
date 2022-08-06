<template>
  <div>
    <h2>This is Child of Child</h2>
    <h2>Item Length: {{ this.itemLength }}</h2>
    <h2>Item: {{ this.items }}</h2>
    <h2>test: {{ this.test }}</h2>
  </div>
</template>

<script>
export default {
  inject: ['itemLength', 'items', 'test'],
};
</script>
