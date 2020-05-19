<template>
	<view>
		<view class="top-bar">
			<view class="search-div">
				<image  class="search-img" src="../../static/img/search.png" mode=""></image>
				<input class="search" type="text" @input="search" placeholder="搜索用户或群" placeholder-style="color:#aaa;font-weight:200;" value="" />
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="backOne">
					取消
				</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user">
				<view class="title" v-if="userarr.length>0">用户</view>
				<view class="list" v-for="(item,index) in userarr" :key="item.id">
					<image class="userimg" :src="item.imgurl" mode=""></image>
					<view class="names">
						<view class="name" v-html="item.name">
							<!-- {{item.name}} -->
						</view>
						<view class="email" v-html="item.email">
							<!-- {{item.email}} -->
						</view>
					</view>
					<view class="right-bt send" v-if="item.tip==1">
							发消息
					</view>
					<view class="right-bt add" v-if="item.tip==0">
						加好友
					</view>
				</view>
				<view class="list user">
					<image class="userimg" src="../../static/img/2256974_131330799000_2.jpg" mode=""></image>
					<view class="names">
						<view class="name">
							收到回复速度
						</view>
						<view class="email">
							2273525664@qq.com
						</view>
					</view>
					<view class="right-bt add">
						加好友
					</view>
				</view>
				<view class="list user">
					<image class="userimg" src="../../static/img/2256974_131330799000_2.jpg" mode=""></image>
					<view class="names">
						<view class="name">
							收到回复速度
						</view>
						<view class="email">
							2273525664@qq.com
						</view>
					</view>
					<view class="right-bt send">
						发消息
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	export default {
		data() {
			return {
				userarr:[],
			}
		},
		methods: {
			search:function(e){
				this.userarr = [];
				let searchval = e.detail.value;
				if(searchval.length>0){
					this.searchUser(searchval);
				}
				// console.log(searchval);	
			},
			//寻找关键词匹配用户
			searchUser:function(e){
				let arr = datas.friends();
				for(let i=0;i<arr.length;i++){
					// console.log(arr[i].name.search(e) != -1 );
					if(arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1){
						this.isFriend(arr[i]);
						arr[i].imgurl='../../static/img/'+arr[i].imgurl;
					    arr[i].name  = arr[i].name.replace(e,"<span style='color:#4AAAFF;'>"+e+"</span>");
						arr[i].email = arr[i].email.replace(e,"<span style='color:#4AAAFF;'>"+e+"</span>");
						this.userarr.push(arr[i]);
					}
				}
				// console.log(this.userarr);
			},
			//判断是否为好友
			isFriend:function(e){
				let tip = 0;
				let arr = datas.isFriend();
				for(let i=0;i<arr.length;i++){
					if(arr[i].friendid==e.id){
						tip =1;
					}
				}
				e.tip = tip;
				// console.log(e.tip);
			},
			// 使用uni.navigateBack可以返回到原页面 （返回登录页面)
			backOne:function(){
				uni.navigateBack({
					delta:1
				});
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../commons/css/mycss.scss");
    @import url("search.css");
</style>
