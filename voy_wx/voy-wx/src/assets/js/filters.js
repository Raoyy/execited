let toDate = time => {  
    if(time){
    	let oTime = new Date(time);
    	let year = oTime.getFullYear();
    	let mounth = oTime.getMonth();
    	let day = oTime.getDate();
        return year+"-"+mounth+"-"+day
    }
}
let toSex = sex => {
    if(sex == true || sex == false){
        return sex ? "男" : "女"
    }
} 
let TimeYmd = time => {
	if(time){
    	let dat = new Date(time);//生成日期
      	let Ndat = new Date();//生成日期
      	let year=dat.getFullYear();
      	let month=dat.getMonth()+1;
      	let date1=dat.getDate();
      	return year+"年"+month+"月"+date1+"日 ";
    }
}
export{
	toDate,
	toSex,
	TimeYmd
}