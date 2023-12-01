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
        <view>
          <u-row>
            <u-col span="2">未预订</u-col>
            <u-col span="1"><u-icon name="lock-open"></u-icon></u-col>
            <u-col span="2">已预订</u-col>
            <u-col span="1"><u-icon name="lock-fill"></u-icon></u-col>
          </u-row>
        </view>
        <view style="margin-top: 20rpx">
          <u-row>
            <u-col span="1" v-for="count in 12" :key="count">
              <view class="col-l">
                <u-icon name="lock-open"></u-icon>
                <view>{{ count }}</view>
              </view>
            </u-col>

            <u-col span="1" v-for="count1 in 12" :key="count1">
              <view class="col-l">
                <u-icon name="lock-open"></u-icon>
                <view>{{ count1 + 12 }}</view>
              </view>
            </u-col>
          </u-row>
        </view>

        <view style="display: flex; align-items: center; margin-top: 20rpx">
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

        <u-button @click="showTime" v-if="chooseHour">预订</u-button>
      </view>
    </u-card>
    <u-picker
      v-model="show"
      mode="time"
      :params="params"
      @confirm="confirm"
    ></u-picker>
    <!-- <view v-if="endTimes.year"> -->
    <view
      >开始时间：{{ startTimes.year }}年{{ startTimes.month }}月{{
        startTimes.day
      }}日{{ startTimes.hour }}时</view
    >
    <view
      >结束时间：{{ endTimes.year }}年{{ endTimes.month }}月{{
        endTimes.day
      }}日{{ endTimes.hour }}时</view
    >

    <!-- </view> -->
    <u-card title="注意事项">
      <view slot="body">
        <u-parse :html="content"></u-parse>
      </view>
    </u-card>

    <view style="height: 150rpx">
      <view class="bookingButton">
        <u-button
          :custom-style="customStyle"
          :ripple="true"
          ripple-bg-color="#859900"
          >预订</u-button
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chooseHour: "",
      endTimes: {
        year: "",
        month: "",
        day: "",
        hour: "",
      },
      startTimes: {
        year: "",
        month: "",
        day: "",
        hour: "",
      },
      timeList: ["4", "6", "8", "12"],
      endTime: "",
      numbers: "-1",
      background: "",
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
      customStyle: {
        // marginTop: "20px", // 注意驼峰命名，并且值必须用引号包括，因为这是对象
        backgroundColor: "cornflowerblue",
        color: "white",
        fontSize: "30rpx",
        borderRadius: "0rpx",
      },
      content: `
				<h1>欢迎入住</h1>
				<p>1.禁止吸烟</p>
				<p>2.禁止带宠物</p>
				<p>3.禁止带儿童</p>
				<p>4.禁止带行李</p>
				<p>5.禁止带宠物</p>
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`,
    };
  },
  methods: {
    showTime() {
      (this.endTimes = {
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
      }),
        (this.show = true);
    },
    numberClick(item) {
      this.numbers = item;
      this.chooseHour = this.timeList[item];
    },
    confirm(e) {
      this.startTimes = {
        day: e.day,
        hour: e.hour,
        minute: e.minute,
        second: e.second,
        year: e.year,
        month: e.month,
      };

      let comTime = e.timestamp * 1000 + Number(this.chooseHour) * 3600 * 1000;
      var newDate = new Date();
      newDate.setTime(comTime);
      this.endTimes = {
        day: newDate.getDate().toString().padStart(2, "0"),
        hour: newDate.getHours().toString().padStart(2, "0"),
        month: (newDate.getMonth() + 1).toString().padStart(2, "0"),
        year: newDate.getFullYear(),
      };
    },
  },
  onLoad(options) {
    this.background = this.$store.state.background;
  },
};
</script>

<style lang="scss" scoped>
.bookingButton {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.col-l {
  text-align: center;
}
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
