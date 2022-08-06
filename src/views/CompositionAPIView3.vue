<template>
  <div>
    <h2>Calculator3</h2>
    <div>
      <input type="text" v-model.number="num1" />
      <span> + </span>
      <input type="text" v-model.number="num2" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
// 2와 다르게 toRefs가 추가 됨.
import { reactive, computed, toRefs } from 'vue';

// 외부로 뺀 이유는 공통함수로 사용할 수 있다는 것을 보여주기 위한 예시.
const plusCalculator = () => {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2),
  });
  // 반응형으로 선언 된 num1, num2, result가 외부 function에서 정상적으로
  return toRefs(state);
};

export default {
  setup() {
    let { num1, num2, result } = plusCalculator(); //외부function
    return {
      num1,
      num2,
      result,
    };
  },
};
</script>
