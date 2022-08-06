<template>
  <SlotModalLayout>
    <template v-slot:header>
      <h1>ddddd</h1>
    </template>

    <!-- name을 정의해 놓지 않은 것은 default로 인식된다. -->
    <template v-slot:default>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>

    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </SlotModalLayout>
</template>

<script>
import SlotModalLayout from './SlotModalLayout.vue';
export default {
  component: { SlotModalLayout },
};
</script>
