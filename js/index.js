/*
* @Author: Administrator
* @Date:   2017-09-05 18:42:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 14:34:27
*/
window.onload=function(){
	// 获取节点
	var $spans=document.getElementById("title").children;//获取到span按钮
	// 选项卡
	for(var i=0;i<$spans.length-1;i++){
		$spans[i].onclick=function(){
			// 让span的class为空
			for(var j=0;j<$spans.length-1;j++){
				$spans[j].setAttribute("class", "");
			}
			//点亮【模特 演绎 专业】按钮
			this.setAttribute("class", "orange");
			var $containerDiv=document.getElementsByClassName("screen")[0].children;

			var tempIndex=0;
			if(this.innerHTML=="模特"){
				tempIndex=0;
			}else if(this.innerHTML=="演绎"){
				tempIndex=1;
			}else if(this.innerHTML=="专业"){
				tempIndex=2;
			}
			for(var k=0;k<$containerDiv.length-1;k++){
				if(k==tempIndex){
					$containerDiv[k].style.display="block";
				}else{
					$containerDiv[k].style.display="none";
				}
			}
		}
	}

	// 自动轮播
	var GroupAll=document.getElementById("GroupAll");
	var lis=GroupAll.children;
	var ulbox=document.getElementsByClassName("boxIndex")[0];
	var boxIndex=ulbox.children;
	console.log(boxIndex);
	console.log(lis);
	var setId=null;
	GroupAll.style.width=lis[0].offsetWidth*lis.length+"px";
	function intervalPlayer(){
		clearInterval(setId);
		setId=setInterval(function(){
			GroupAll.style.left=GroupAll.offsetLeft-750+"px";
			if(GroupAll.offsetLeft<=-GroupAll.offsetWidth){
				GroupAll.style.left=0+"px";
			}
			var liIndex=0;
			if(GroupAll.offsetLeft==0){
				liIndex=0;
			}
			if(GroupAll.offsetLeft==-750){
				liIndex=1;
			}
			if(GroupAll.offsetLeft==-1500){
				liIndex=2;
			}
			if(GroupAll.offsetLeft==-2250){
				liIndex=3;
			}
			for(var i=0;i<boxIndex.length;i++){
				if(liIndex==i){
					boxIndex[i].setAttribute("class","current");
				}else{
					boxIndex[i].setAttribute("class","");
				}
			}
		}, 1000)
		return setId;
	}
	var Pid=intervalPlayer();
	// 点击橘色小杠与每个li对应
	for(var i=0;i<boxIndex.length;i++){
		boxIndex[i].onclick=function(){
			for(var j=0;j<boxIndex.length;j++){
				boxIndex[j].setAttribute("class", "");
			}
			this.setAttribute("class", "current");
			clearInterval(Pid);
			Pid=intervalPlayer();
			var flag=this.getAttribute("flag");
			GroupAll.style.left=(flag*-750)+"px";
		}
	}
	// 鼠标放到图上停止轮播
	GroupAll.onmouseover=function(){
		clearInterval(Pid);
	}
	GroupAll.onmouseout=function(){
		clearInterval(Pid);
		Pid=intervalPlayer();
	}
}