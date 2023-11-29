<template>
  <view>
    <u-avatar :src="src"></u-avatar>
    <u-avatar :text="text"></u-avatar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: "https://cdn.uviewui.com/uview/swiper/1.jpg",
      text: "无头像",
      tabbar: "",
    };
  },
  onLoad() {
    this.tabbar = this.$store.state.tabbar;
  },
};
</script>

<style></style>
