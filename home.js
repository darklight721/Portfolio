document.addEventListener("DOMContentLoaded", function(){
	
	var blurClass = "blur"
	var unblurClass = "unblur";
	
	var elemNames = ["me","skills","projects","contacts","summary"];
	var texts = document.getElementById("texts");
	
	// helper function that loops an array
	var loopArray = function(array,callback) {
		for (var i = 0; i < array.length; i++)
		{
			callback(i);
		}
	};
	
	// sets the classname of the elems returned by the query
	var setClassName = function(query,className) {
		var elems = document.querySelectorAll(query);
		loopArray(elems,function(index){
			elems[index].className = className;
		});
	};
	
	// blur/unblur the guven elemName
	var blur = function(elemName) {
		if (elemName === "me")
		{
			texts.className = unblurClass;
			
			setClassName("#container p span",unblurClass);
		}
		else
		{
			texts.className = blurClass;
			
			setClassName("#container p :not([name="+ elemName +"])",blurClass);
			
			setClassName("#container p [name="+ elemName +"]",unblurClass);
		}
	};
	
	// detect if useragent is iOS
	var event;
	if (navigator.userAgent.indexOf('iPad') != -1 || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1)
	{
		event = "click";
	}
	else
	{
		event = "mouseover";
	}
	
	// set event listeners to the elems in nav
	loopArray(elemNames,function(index){
		var elem = document.getElementById(elemNames[index]);
		elem.addEventListener(event,function(){
			blur(elemNames[index]);
			
			// unselect previous selection
			setClassName("#container nav :not(#"+ elemNames[index] +")","");
			// set selection to the current elem
			elem.className = "selected"			
		},false);
	});
	
}, false);