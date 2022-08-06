<template>
  <div>
    <button @click="showData">부모 버튼</button>
    <hr />
    <FromChild @click="showData" ref="child" />
  </div>
</template>

<script>
import FromChild from '../components/FromChild.vue';
export default {
  components: { FromChild },
  data() {
    return {};
  },
  computed: {
    msg() {
      return this.$refs.child.msg;
    },
  },
  methods: {
    showData() {
      alert(this.msg);
    },
  },
};
</script>
