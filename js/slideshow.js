$(document).ready(function(e) {
    $('.hover').hover(function(){
        $(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });
    $( "#tourOperator" ).draggable();
    $( "#webDesign" ).draggable();
	$( "#hotelManagement" ).draggable();
	$( "#inventory" ).draggable();
    $( "#software" ).draggable();
    $( "#internetMarketing" ).draggable();
    $(".button").bind("mouseover",function(){
		var parserid = $(this).data("popup");
		for(var q=1;q<=4;q++){
			$(".popup"+q).removeClass("displayBlock");
			$(".popup"+q).removeAttr("style");
		}
		$("."+parserid).addClass("displayBlock");
		$("."+parserid).addClass("active");
		$("."+parserid).animate({"width":"254px","height":"309px"},300);
	});
	$(".button").bind("mouseout",function(){
		$(".active").animate({"width":"0px","height":"0px"},300);
	});
  /*banner animate*/
 $(".tourOperator").animate({"top":"-670px","padding-left":"10%"},1200);
  $(".tourOperator").fadeIn(3000);
  $(".webDesign").fadeIn();
  $(".webDesign").animate({"top":"-1093px","padding-left":"40%"},1200);
   $(".internetMarketing").fadeIn(2000);
  $(".internetMarketing").animate({"top":"-1171px","padding-left":"65%"},1200);
   $(".inventory").fadeIn(2000);
  $(".inventory").animate({"top":"-566px","padding-left":"62%"},1000);
  //$(".ani_leaf").slideDown(2000);
  $(".hotelManagement").fadeIn(1000);
  $(".hotelManagement").animate({"top":"-905px","padding-left":"8%"},1400);
    $(".software").fadeIn(1000);
  $(".software").animate({"top":"-855px","padding-left":"35%"},1400);
   $(".teaCup").fadeIn(3000);
  $(".teaCup").animate({"top":"210px","padding-left":"10%"},900);
  
  $("#tourOperator,#hotelManagement,#internetMarketing,#teacup,#inventory,#webDesign,#software").bind("mouseover",function(){
	 /* $(".dialogBox").html("<h1 class='test'>test</h1>");*/
	
  });
  $("#tourOperator").mouseover(function(){
    $("#bckground").css("background-color","#e8e8e4");
  });
  $("#hotelManagement").mouseover(function(){
    $("#bckground").css("background-color","#e6dddd");
  });
  
   $("#webDesign").mouseover(function(){
    $("#bckground").css("background-color","#e5edf1");
  });
  
   $("#software").mouseover(function(){
    $("#bckground").css("background-color","#e8ebde");
  });
    $("#internetMarketing").mouseover(function(){
    $("#bckground").css("background-color","#d3dbdc");
  });
 

  
});