<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image class="top-bar-left-img" src="../../static/img/03d3f3e4f8c6f9ea2a0c503346735882.jpg" mode=""></image>
			</view>
			<view class="top-bar-center">
				<image class="top-bar-center-img" src="../../static/img/2256974_131330799000_2.jpg" mode=""></image>
			</view>
			<view class="top-bar-right">
				<view class="search" >
					<image class="top-bar-right-img-left" src="../../static/img/search.png" mode=""></image>
				</view>
				<view class="add" @tap="toSearch">
					<image class="top-bar-right-img-right" src="../../static/img/03B58PIC7un_1024.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="apply">
				<view class="friend-list">
					<view class="friend-list-l">
						<image src="../../static/img/2256974_131330799000_2.jpg" class="friend-list-l-img" mode=""></image>
						<text class="tip">1</text>
					</view>
					<view class="friend-list-r">
						<view class="friend-list-r-top">
							<view class="name">
								好友申请
							</view>
							<view class="time">
								15:56
							</view>
						</view>
						<view class="news">
							对方要申请你为好友
						</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friend-list" v-for="(item,index) in friends" :key="item.id">
					<view class="friend-list-l">
						<image :src="item.imgurl" class="friend-list-l-img" mode=""></image>
						<text class="tip" v-if="item.tip>99">99+</text>
						<text class="tip" v-else-if="item.tip>0">{{item.tip}}</text>
					</view>
					<view class="friend-list-r">
						<view class="friend-list-r-top">
							<view class="name">
								{{item.name}}
							</view>
							<view class="time">
								{{changeTime(item.time)}}
							</view>
						</view>
						<view class="news">
							{{item.news}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	import myfunction from '../../commons/js/myfunction.js';
	export default {
		data() {
			return {
				friends:[],
			}
		},
		onLoad() {
			this.getFriends();
			this.changeTime();
		},
		methods: {
			getFriends:function(){
				this.friends = datas.friends();
				for(let i=0;i<this.friends.length;i++){
					this.friends[i].imgurl='../../static/img/'+this.friends[i].imgurl;
				}
				// console.log(this.friends);
			},
			changeTime:function(date){
				return myfunction.dateTime(date);
			},
			//跳转到注册页面
			toSearch:function(){
				uni.navigateTo({
				    url: '../search/search',
				});
			},

		}
	}
</script>

<style lang="scss">
	@import url("../../commons/css/mycss.scss");
	@import url("index.css");
</style>
