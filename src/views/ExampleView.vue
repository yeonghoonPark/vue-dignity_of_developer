<template>
  <div>
    <PageTitle :title="title" />
    <ChildComponent
      :likes="likes"
      :isOk="isOk"
      :commentIds="commentIds"
      :author="author"
    />
    <hr />
    <button type="button" @click="callChildFunction">부모에 있는 Click</button>
    <Button ref="child_component" />
    <hr />
    <DataChange ref="child_message_change" />
    <button type="button" @click="changeMessage">Click</button>
    <hr />
    <FromChild @send-message="sendMessage" />
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from '../components/ChildComponent.vue';
import Button from '../components/Button.vue';
import DataChange from '../components/DataChange.vue';
import FromChild from '../components/FromChild.vue';

export default {
  components: { PageTitle, ChildComponent, Button, DataChange, FromChild },
  data() {
    return {
      title: "This is Ttile's data",
      likes: 11,
      isOk: true,
      commentIds: [1, 5, 2, 3],
      author: {
        name: '홍길동',
        company: 'samsung',
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    callChildFunction() {
      // this.$refs.child_component.$refs.child_btn.click();
      this.$refs.child_component.childFunction();
    },
    changeMessage() {
      this.$refs.child_message_change.msg = '부모에서 변경한 message';
    },
    sendMessage(parameter) {
      alert(parameter);
    },
  },
};
</script>
