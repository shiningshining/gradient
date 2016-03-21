
// Window.onload = function (){  
	var icolor=document.getElementById("colorPicker");
	var irange=document.getElementById("points");
	var txt=document.getElementById("txt");
	var wrap_colors=document.getElementById("wrap_colors");
	var btnAdd=document.querySelectorAll('input[type=button]')[0];


	var irangeVal=irange.value;
	txt.innerHTML=irangeVal;

	var popup=function(ele){
		ele.style.display="block";
	}
	var hide=function(){
		ele.style.display="none";
	}


	irange.onchange=function(){
		txt.innerHTML=this.value;
	}

	btnAdd.onclick=function(){

		function popup_color(){
			popup(icolor);
			icolor.onchange=function(){
				debugger;
				var _color=icolor.value;
				var eleEach=document.createElement("div");
				eleEach.setAttribute("class","each");
				eleEach.style.backgroundColor=_color;
				// eleEach.style.backgroundColor="#000";
				wrap_colors.appendChild(eleEach);
			}
		}
		popup_color();

		// document.body.appendChild(eleEach);
	}


// }