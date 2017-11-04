/*
* @Author: Administrator
* @Date:   2017-09-04 15:12:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 16:13:50
*/
//获取验证码
	var $a=document.getElementById("confirm");
		$a.onclick=function(event){
			var $num= Math.round(Math.random()*10000)+Math.round(Math.random()*1000)+Math.round(Math.random()*100)+Math.round(Math.random()*10);
			// console.log($num);
			$a.innerHTML=$num;
		}
		var $checked=document.getElementById("checked");
		var i=0;
		$checked.onclick=function(){
			i++;
			if(i%2==0){
				$checked.innerHTML="";
			}else{
				$checked.innerHTML="✔";
			}
		}