<template>
  <view>
    <u-navbar
      title="房间详情"
      :background="background"
      title-color="white"
      back-icon-color="white"
    ></u-navbar>

    <!-- 房间详情 -->
    <u-card :title="title">
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
    <!-- 预订情况 -->

    <u-card title="预定情况">
      <view slot="body">
        <view style="display: flex; align-items: center">
          <div>时长选择：</div>
          <div
            class="tags"
            :class="[numbers == index ? 'aaab' : '']"
            v-for="(item, index) in timeList"
            :key="index"
            @click="numberClick(index)"
          >
            {{ timeList[index] }}小时
          </div>
        </view>

        <u-button @click="show = true">预订</u-button>
      </view>
    </u-card>
    <u-picker
      v-model="show"
      mode="time"
      :params="params"
      @confirm="confirm"
    ></u-picker>
    <view
      >结束时间:年{{ endTimes.year }}月{{ endTimes.month }}日{{
        endTimes.date
      }}时{{ endTimes.hour }}</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      endTimes: {
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
      },
      timeList: ["4", "6", "8", "12"],
      endTime: "",
      numbers: "1",
      background: {
        backgroundColor: "cornflowerblue",
      },
      title: "房间号 101",
      show: false,
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: false,
        second: false,
        timestamp: true,
      },
    };
  },
  methods: {
    numberClick(item) {
      this.numbers = item;
      this.a = this.timeList[item];
      console.log(this.a, "a");
    },
    confirm(e) {
      console.log(e);
      console.log("1111");
      this.a = this.a * 3600;
      console.log(this.a, "a");
      this.endTime = Number(e.timestamp) + Number(this.a);
      console.log(this.endTime, "endTime");
      this.ty(this.endTime);
    },
    ty(time) {
      console.log(time, "time");
      var data = new Date(time * 1000);
      var year = data.getFullYear() + "";
      console.log(year, "year") + "";
      var month = data.getMonth() + 1;
      var date = data.getDate() + "";
      var hour = data.getHours() + "";
      var minute = data.getMinutes() + "";
      var second = data.getSeconds() + "";
      var SS = year + month + date + hour + minute + second;
      console.log(SS, "SS");
      return SS;
    },
  },
};
</script>

<style lang="scss" scoped>
.aaab {
  color: red;
}
.tags {
  background-color: antiquewhite;
  margin: 10rpx;
  padding: 10rpx;
  border-radius: 15rpx;
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
