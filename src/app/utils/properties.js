jQuery(document).ready(function(){
		/* Change value based on environment */
		var communityURL = "https://community.stage.anaplan.com";
		if(document.location.host == "help.anaplan.com") {
			communityURL = "https://community.anaplan.com";
		}
		
		try {
			$.each($("#um-left-nav").find("a"), function(index, ele){
					var eleHref = $(ele).attr("href");
					if((eleHref.indexOf("http:") == -1) && (eleHref.indexOf("https:") == -1)) {
						$(ele).attr("href", communityURL + eleHref);
					}			
			});
			$.each($("#uhf-header").find("a"), function(index, ele){
					var eleHref = $(ele).attr("href");
					if((eleHref.indexOf("http:") == -1) && (eleHref.indexOf("https:") == -1)) {
						$(ele).attr("href", communityURL + eleHref);
					}	
			});
			
			$.each($("#uhf-footer").find("a"), function(index, ele){
				var eleHref = $(ele).attr("href");
				if((eleHref.indexOf("http:") == -1) && (eleHref.indexOf("https:") == -1)) {
					$(ele).attr("href", communityURL + eleHref);
				}	
			});
			$(".uhf-search-form").attr("action", communityURL + $(".uhf-search-form").attr("action"));
		} catch(e){
			console.log(e);
		}

	});