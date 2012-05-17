function autoFill(id){
	var title=$(id).attr('title'); 
	$(id).addClass("readonly").attr({ value: title }).focus(function(){
		if($(id).val()==title){
			$(id).val("").removeClass("readonly");
		}
	}).blur(function(){
		if($(id).val()==""){
			$(id).addClass("readonly").val(title);
		}
	});
}

$(document).ready(function(){  
	autoFill("#s");
	
	// Sorter checkbox
    $(".sorter-item label").click(function(){
        var checkbox = $(this).find("input").parent();
        if(checkbox.hasClass("checked")) $(this).parent().addClass("sorter-item_act");
        else $(this).parent().removeClass("sorter-item_act");
    });
    $(function(){ $(".sorter input:checkbox").uniform(); });
    
	// Popups
    $("#link_ask").click(function(){$(".overlay").show(); $("#popup_ask").show(); return false;});
    $("#link_preorder").click(function(){$(".overlay").show(); $("#popup_preorder").show(); return false;});
    $(".overlay").click(function(){$(this).hide(); $(".popup").hide();});

    // Catalog Item Hover
    $("#catalog .catalog-item img").hover(
        function(){$(this).parents(".catalog-item").addClass("catalog-item_act");},
        function(){$(this).parents(".catalog-item").removeClass("catalog-item_act");});
        
    // Carousel 
    $(".carousel-items").jCarouselLite({
        visible: 1,
        start: 0,
        btnNext: ".carousel .i-next",
        btnPrev: ".carousel .i-prev"
    });    
    	
	// Slider
	$('#slider').slider({
		range: true,
		values: [20, 58]
	});
});