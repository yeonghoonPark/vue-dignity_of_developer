export default {
  mounted() {
    // DB 시간저장
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    console.log(`${hours}시 ${minutes}분 ${secondes}초`);
  },
  unmounted() {
    // DB 시간저장
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    console.log(`${hours}시 ${minutes}분 ${secondes}초`);
  },
};
