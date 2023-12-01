<template>
  <view>
    <u-navbar
      title="首页"
      :background="background"
      title-color="white"
      back-icon-color="white"
      :is-back="flase"
    ></u-navbar>
    <u-swiper :list="list" :effect3d="true" mode="none"></u-swiper>
    <u-card title="XXXX">
      <view slot="body">
        <view class="card-body">
          <view>
            <view>时间：xxx</view>
            <view>xxxxxxxxxxxxxxxxxx</view>
          </view>
          <view style="display: flex">
            <view class="t-i">
              <u-icon name="map-fill"></u-icon>
              <view>导航</view>
            </view>
            <view class="t-i" @click="callPhone">
              <u-icon name="phone-fill"></u-icon>
              <view>电话</view>
            </view>
          </view>
        </view>
        <u-notice-bar
          type="warning"
          :list="msg"
          border-radius="10"
          speed="50"
        ></u-notice-bar>
      </view>
    </u-card>
    <u-grid :col="4" :border="false">
      <u-grid-item>
        <u-icon name="photo" :size="46"></u-icon>
        <view class="grid-text">xxxx</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="lock" :size="46"></u-icon>
        <view class="grid-text">xxxx</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="hourglass" :size="46"></u-icon>
        <view class="grid-text">xxxx</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="hourglass" :size="46"></u-icon>
        <view class="grid-text">xxxx</view>
      </u-grid-item>
    </u-grid>

    <u-line color="#dbdbdb" style="margin: 0 5rpx" />

    <view style="font-size: 20px">
      <span>xxxx</span>
    </view>
    <section v-for="item in ['101', '102', '103', '104', '105']" :key="item">
      <u-card :title="item" @click="goto()">
        <view slot="body">
          <u-row>
            <u-col span="6">
              <u-image
                width="100%"
                height="300rpx"
                src="https://cdn.uviewui.com/uview/swiper/1.jpg"
              ></u-image>
            </u-col>
            <u-col span="2">
              <view class="intro">
                <view>xxxxxx</view>
                <view class="price">xxxxxx</view>
              </view>
            </u-col>
          </u-row>
        </view>
      </u-card>
    </section>
    <u-divider>暂无更多</u-divider>
    <u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabbar: "",
      background: "",
      list: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
      ],
      msg: ["xxxxxxxxxxxxxxxxxxxxx"],
    };
  },
  onLoad() {
    this.tabbar = this.$store.state.tabbar;
    this.background = this.$store.state.background;
  },
  methods: {
    goto() {
      uni.navigateTo({
        url: "/pages/roomDetails/index",
      });
    },
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: "17382807713",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  display: flex;
  justify-content: space-between;
  .t-i {
    text-align: center;
    margin: 10rpx;
  }
}
.intro {
  height: 300rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20rpx;
  .price {
    color: cornflowerblue;
    font-size: 20px;
  }
}
</style>
