<template>
	<view>
		<view class="top-bar">
			<view class="search-div">
				<image  class="search-img" src="../../static/img/search.png" mode=""></image>
				<input class="search" type="search" @input="search" placeholder="搜索用户或群" placeholder-style="color:#aaa;font-weight:200;" value="" />
			</view>
			<view class="top-bar-right">
				<view class="text">
					取消
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import url("../../commons/css/mycss.scss");
    @import url("search.css");
</style>
