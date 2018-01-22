"use strict";
//正则判断
//敏感字数组
var forbiddenArray =['xx','<','>','黄色','色情','政治','共产党','政府','tmd','TMD'];
module.exports = {
	//匹配手机号
    checkMobile(value){
        if(/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)){
            return true;
        }
        return false;
    },
    //匹配验证码
    checkValidate(value){
        if(/^[0-9]{5}$/.test(value)){
            return true;
        }
        return false;
    },
    //匹配密码
    checkPassword(value){
        if(/^(\w){6,25}$/.test(value)){
            return true;
        }
        return false;
    },
    //匹配网址
    checkUrl(value){
    	if(/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(value)){
    		return true;
    	}
    	return false;
    },
    //讲敏感字换成***
    checkText(str){
    	//去空格
    	var destString = str.trim();
	    var re = '';
	    for(var i=0;i<forbiddenArray.length;i++){
	        if(i==forbiddenArray.length-1)
	            re+=forbiddenArray[i];
	        else
	            re+=forbiddenArray[i]+"|";
	    }
	    //定义正则表示式对象
	    //利用RegExp可以动态生成正则表示式
	    var pattern = new RegExp(re,"g"); 
	    destString=destString.replace(pattern,"***");
	    return destString;
    }
};