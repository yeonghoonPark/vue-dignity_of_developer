<template>
  <div>
    <input type="text" v-model.number="test.n1" />
    <span> + </span>
    <input type="text" v-model.number="test.n2" />
    <span> = </span>
    <span>{{ test.result }}</span>
    <br />
    <button type="text" @click="onCalculator">Calculator</button>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity';
export default {
  setup() {
    let test = reactive({
      n1: 0,
      n2: 0,
      result: computed(() => test.n1 + test.n2),
    });

    const onCalculator = () => {
      test.result = test.n1 + test.n2;
    };

    return { test, onCalculator };
  },
};
</script>
