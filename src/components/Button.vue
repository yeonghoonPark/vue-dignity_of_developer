<template>
  <div>
    <button type="button" @click="childFunction" ref="child_btn">
      자식에 있는 Click
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button-',
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    childFunction() {
      alert('부모component에서 발생 할 이벤트');
    },
  },
};
</script>
