export default{
	// 首页时间转化
	dateTime(date){
		let old= new Date(date);
		let now = new Date();
		// 获取old具体时间
		let d =old.getTime();
		let m =old.getMinutes();
		let h =old.getHours();
		let D =old.getDate();
		let M =old.getMonth();
		let Y =old.getFullYear();
		// 获取now具体时间
		let nd =now.getTime();
		let nm =now.getMinutes();
		let nh =now.getHours();
		let nD =now.getDate();
		let nM =now.getMonth();
		let nY =now.getFullYear();
		// 当天的显示时间
		if(D === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return h+':'+m;
		}
		// 前天的显示时间
		if(D+1 === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return '前天 '+h+':'+m;
		}else{
			return Y+'/'+M+'/'+D;
		}
	}
}