$(document).ready(function() {
    $("button").click(function() {
    	if ($(".itemm").val().length == 0) {
			alert("Please Enter a Value");
			//$(".itemm").val("");
		} 
		else { 
        $("ul").append("<li class=food>" + $(".itemm").val() + "<img class=delete src=http://icons.iconarchive.com/icons/hopstarter/rounded-square/256/Button-Delete-icon.png>" +  "</li>");
        $(".itemm").val("");
        }
    });
    $('ul').on("click", "li", function() {
    	$(this).closest('li').toggleClass("strike");
    	$(this).closest('li').toggleClass("food");
    	//$(this).appendTo("ul");
    });
    $('ul').on("click", ".delete", function(e) {
    	e.preventDefault();
    	$(this).parent().remove();
    });
    $("ul").sortable();
   // });

});