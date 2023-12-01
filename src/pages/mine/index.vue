<template>
  <view>
    <u-navbar
      title="我的"
      :background="background"
      title-color="white"
      back-icon-color="white"
      :is-back="flase"
    ></u-navbar>

    <!-- 头像 -->

    <view class="u-m-t-30" style="display: flex; justify-content: center">
      <u-avatar :src="userInfo.avatarUrl" size="150"></u-avatar>
    </view>
    <view class="u-m-t-20">
      <view class="u-font-24 u-p-l-20 u-p-r-20 u-text-center">{{
        userInfo.nickName
      }}</view>
    </view>
    <!-- 内容 -->
    <u-cell-group>
      <u-cell-item icon="setting" title="我的卡券"></u-cell-item>
      <u-cell-item icon="setting" title="在线客服"></u-cell-item>
      <u-cell-item
        icon="setting"
        title="反馈热线:17382807713"
        @click="callPhone"
      ></u-cell-item>
      <u-cell-item icon="setting" title="历史订单"></u-cell-item>
    </u-cell-group>

    <u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabbar: "",
      background: "",
      userInfo: {
        avatarUrl: "https://cdn.uviewui.com/uview/swiper/1.jpg",
        nickName: "张三",
      },
    };
  },
  methods: {
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: "17382807713",
      });
    },
  },
  onLoad() {
    this.background = this.$store.state.background;
    this.tabbar = this.$store.state.tabbar;
  },
};
</script>

<style></style>
