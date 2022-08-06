<template>
  <div>
    <h2>Calculator1</h2>
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    let state = reactive({
      // reactive를 이용하여 num1, num2, result를 실시간 변경사항에 반응형 적용.
      num1: 0,
      num2: 0,
      result: 0,
    });

    const plusNumbers = () => {
      state.result = state.num1 + state.num2;
    };

    return {
      // reactive로 선언 된 state와 plusNumbers함수를 반환함으로 기존 data, methods 옵션 역할.
      state,
      plusNumbers,
    };
  },
};
</script>
