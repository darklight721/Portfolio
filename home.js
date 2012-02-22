document.addEventListener("DOMContentLoaded", function(){
	var me = document.getElementById("me");
	var skill = document.getElementById("skill");
	var project = document.getElementById("project");
	var contact = document.getElementById("contact");
	var summary = document.getElementById("summary");
	var texts = document.getElementById("texts");
	
	var spanNames = ["skills","projects","contacts","summaries"];
	
	var blur = function(elemName) {
		if (elemName === "me")
		{
			texts.className = "unblur";
			
			for (var i = 0; i < spanNames.length; i++)
			{
				var elems = document.getElementsByName(spanNames[i]);
				if (elems[0].className === "blur")
				{
					for (var j = 0; j < elems.length; j++)
					{
						elems[j].className = "unblur";
					}
				}
			}			
		}
		else
		{
			if (texts.className !== "blur")
			{
				texts.className = "blur";
			}
			
			for (var i = 0; i < spanNames.length; i++)
			{
				if (spanNames[i] === elemName)
				{
					var elems = document.getElementsByName(spanNames[i]);
					for (var j = 0; j < elems.length; j++)
					{
						elems[j].className = "unblur";
					}
					
				}
				else
				{
					var elems = document.getElementsByName(spanNames[i]);
					if (elems[0].className === "unblur")
					{
						for (var j = 0; j < elems.length; j++)
						{
							elems[j].className = "blur";
						}
					}
				}
			}	
		}
	};
	
	var event;
	if (navigator.userAgent.indexOf('iPad') != -1 || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1)
	{
		event = "click";
	}
	else
	{
		event = "mouseover";
	}
	
	me.addEventListener(event,function(){
		blur("me");
	},false);
	
	skill.addEventListener(event,function(){
		blur("skills");
	},false);
	
	project.addEventListener(event,function(){
		blur("projects");
	},false);
	
	contact.addEventListener(event,function(){
		blur("contacts");
	},false);
	
	summary.addEventListener(event,function(){
		blur("summaries");
	},false);
	
}, false);