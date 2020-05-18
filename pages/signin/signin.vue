<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toRegister">
				<view class="text">
					注册
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/img/57c7ad7ba739a_1024.jpg" mode=""></image>
		</view>
		<view class="main">
			<view class="title">
				登录
			</view>
			<view class="slogan">
				你好，还原来到ccc
			</view>
			<view class="inputs">
				<input type="text" @blur="getUserName" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:200;" class="user" value="" />
				<input type="password" @blur="getUserPassword" placeholder="密码" placeholder-style="color:#aaa;font-weight:200;" class="pwd" value="" />
			</view>
			<view class="tips">
				输入用户名或密码错误！
			</view>
		</view>
		<view class="submit" @tap="login">
				登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				password:'',
			}
		},
		methods: {
			//跳转到注册页面
			toRegister:function(){
				uni.navigateTo({
				    url: '../register/register',
				});
			},
			// 获取用户名/邮箱
			getUserName:function(e){
				// console.log(e);
				this.user = e.detail.value;
				// console.log(this.user);
			},
			// 获取密码
			getUserPassword:function(e){
				// console.log(e);
				this.password = e.detail.value;
				// console.log(this.password);
			},
			// 登录提交
			login:function(){
				if(this.user && this.password){
					console.log("提交成功");
				}
			}
		}
	}
</script>

<style lang="scss">
	@import url("signin.css");
</style>
