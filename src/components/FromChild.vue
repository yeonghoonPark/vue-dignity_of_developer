<template>
  <div>
    <div>{{ msg }}</div>
    <button type="button" @click="changeData">자식컴포넌트 데이터변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메세지',
    };
  },
  methods: {
    changeData() {
      this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.';
    },
  },
};
</script>
