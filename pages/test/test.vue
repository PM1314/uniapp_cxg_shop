<template>
	<view>
		<u-icon name="photo"></u-icon>
		<u-button text="月落"></u-button>
		<u-toast ref="uToast"></u-toast>
		<u-cell-group title-bg-color="rgb(243, 244, 246)">
			<u-cell
				:titleStyle="{fontWeight: 500}"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
				:icon="item.iconUrl"
				@click="showToast(item)"
			>
			</u-cell>
		</u-cell-group>
		<u-cell title="点击提示" @click="toastTap()"></u-cell>
	</view>
</template>

<script>
	import { similarBook, indexMoreBook } from '@/config/api.js';
	export default {
		data() {
			return {
				show: false,
				list: [{
						type: 'default',
						title: '默认主题',
						message: "锦瑟无端五十弦",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/default.png'
					},
					{
						type: 'error',
						icon: false,
						title: '失败主题',
						message: "一弦一柱思华年",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
					},
					{
						type: 'success',
						title: '成功主题(带图标)',
						message: "庄生晓梦迷蝴蝶",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
					},
					{
						type: 'loading',
						title: '正在加载',
						message: "正在加载",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png'
					},
					{
						type: 'default',
						title: '结束后跳转标签页',
						message: "此情可待成追忆",
						url: '/pages/componentsB/tag/tag',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/jump.png'
					}
				],
			}
		},
		methods: {
			showToast(params) {
				this.$refs.uToast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
			},
			toastTap() {
				let postData = {
					keyword: '数学',
					pageSize: 6
				}
				similarBook(postData).then(function(res) {
					console.log('请求成功',res)
					uni.$u.toast('请求成功')
				}).catch((err) =>{
					console.log('err',err)
				})
			},
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			},
		},
	}
</script>

<style>

</style>
