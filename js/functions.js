function enquirys(formData){
$.ajax({
type:'post',
cache:'false',
url:'includes/enquiry.php',
data:formData,
dataType:'json',
beforeSend: function(formData) 
{ 
$("#msg_box").html("Sending......");                      
},
success:function(data){
if(data.reply=="done"){
$("#msg_box").html("Thank You !");
$("#msg_box").css('color','green');
$(".inputs").val("");
}
if(data.reply=="error"){
$("#msg_box").html("Error Try Again !");
$("#msg_box").css('color','red');
}   
}
});
}