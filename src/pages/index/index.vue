<template>
	<view>
		<u-swiper :list="list" :effect3d="true" :mode="none"></u-swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [{
				image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
				title: '昨夜星辰昨夜风，画楼西畔桂堂东'
			},
			{
				image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
				title: '身无彩凤双飞翼，心有灵犀一点通'
			},
			{
				image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
				title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
			}
			],
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
