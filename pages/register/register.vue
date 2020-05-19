<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image src="../../static/img/fanhui.png" class="back-img" mode=""></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/img/57c7ad7ba739a_1024.jpg" mode=""></image>
		</view>
		<view class="main">
			<view class="title">
				注册
			</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" @blur="getUserName" placeholder="请取登录名" placeholder-style="color:#aaa;font-weight:200;" class="user" value="" />
					<view class="employ" v-if="useremploy" >已占用</view>
					<image v-if="isuser" src="../../static/img/dui.png" class="ok"  mode=""></image>
				</view>
				<view class="inputs-div">
					<input type="text" @blur="getUserEmail" placeholder="请输入邮箱" placeholder-style="color:#aaa;font-weight:200;" class="email" value="" />
					<view class="employ" v-if="emailemploy">已占用</view>
					<view class="invalid" v-if="invalid">无效邮箱</view>
					<image class="ok" v-if="isemail" src="../../static/img/dui.png"  mode=""></image>
				</view>
				<view class="inputs-div">
					<input :type="type" @blur="getUserPassword" placeholder="请设置密码" placeholder-style="color:#aaa;font-weight:200;" class="pwd" value="" />
					<image class="look"  @tap="looks" :src="lookurl" mode=""></image>
				</view>
			</view>
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]" @tap="register">
				注册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'password',
				isuser:false,//用户名是否可用
				isemail:false,//邮箱是否占用
				invalid:false,//邮箱是否符合
				useremploy:false,//用户名是否被占用
				emailemploy:false,//邮箱是否被占用
				lookurl:"../../static/img/eye.jpg",
				isok:false,//输入正确变色注册按钮
				UserEmail:'',//邮箱
				UserName:'',//注册名
				UserPassword:'',//密码
			}
		},
		methods: {
			//跳转到注册页面
			toSignUp:function(){
				uni.navigateTo({
				    url: '../register/register',
				});
			},
			//密码显示与隐藏
			looks:function(){
				if(this.look){
					this.type="password";
					this.look=!this.look;
					this.lookurl='../../static/img/taiyang.jpg';
				}else{
					this.type="text";
					this.look=!this.look;
					this.lookurl='../../static/img/eye.jpg';
				}
			},
			// 获取用户名
			getUserName:function(e){
				// console.log(e);
				let reg = /^[a-zA-Z0-9_-]{4,16}$/;
				this.UserName = e.detail.value;
				if(this.UserName.length>0){
					if(reg.test(this.UserName)){
						console.log("用户名正确");
						console.log(this.UserName);
						this.register();
						this.isuser = true;
					}else{
						console.log("用户名不正确");
					}
				}
			},
			//判断是否是邮箱
			getUserEmail:function(e){
				let reg=/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
				// console.log(e.detail.value);
				this.UserEmail=e.detail.value;
				console.log(this.UserEmail);
				if(this.UserEmail.length>0){
					if(reg.test(this.UserEmail)){
						console.log("正确");
						this.register();
						this.isemail = true;
						this.invalid = false;
					}else{
						console.log("不正确");
						this.invalid = true;
						this.isemail = false;
					}
				}
			},
			// 获取密码
			getUserPassword:function(e){
				//至少6-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符：
				let reg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
				this.UserPassword = e.detail.value;
				console.log(this.UserPassword);
				if(this.UserPassword.length>0){
					if(reg.test(this.UserPassword)){
						console.log("密码合格");
						this.register();
						console.log(this.UserPassword);
					}else{
						console.log("密码不合格");
					}
				}
			},
			// 判断注册提交
			register:function(){
				if(this.UserName && this.UserEmail && this.UserPassword){
					console.log("提交成功！");
					this.isok = true;
				}else{
					this.isok = false;
				}
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
	@import url("register.css");
</style>
