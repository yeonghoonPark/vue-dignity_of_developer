<template>
  <div>
    <div>{{ likes }}</div>
    <div>{{ isOk }}</div>
    <div>{{ commentIds }}</div>
    <div>{{ author.name }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
    },
  },
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.commentIds);
  },
  unmounted() {},
  methods: {},
};
</script>
