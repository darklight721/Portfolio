document.addEventListener("DOMContentLoaded", function(){
	var me = document.getElementById("me");
	var skill = document.getElementById("skill");
	var project = document.getElementById("project");
	var contact = document.getElementById("contact");
	var texts = document.getElementById("texts");
	
	var blur = function(elemName) {
		if (elemName === "me")
		{
			texts.className = "";
			var elemsBlur = document.querySelectorAll("#texts span");
			for(var i = 0; i < elemsBlur.length; i++)
			{
				elemsBlur[i].className = "";
				
			}
			
			
		}
		else
		{
			texts.className = "blur";
			var elemsBlur = document.querySelectorAll("#texts span");
			for(var i = 0; i < elemsBlur.length; i++)
			{
				elemsBlur[i].className = "blur";
			}
			
			var elems = document.getElementsByName(elemName);
			for(var i = 0; i < elems.length; i++)
			{
				elems[i].className = "unblur";
			}
		}
	};
	
	me.addEventListener("click",function(){
		blur("me");
	});
	
	skill.addEventListener("click",function(){
		blur("skills");
	});
	
	project.addEventListener("click",function(){
		blur("projects");
	});
	
	contact.addEventListener("click",function(){
		blur("contacts");
	});
	
	
}, false);