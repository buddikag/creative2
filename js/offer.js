// A $( document ).ready() block.
$( document ).ready(function() {
    $("#progress").hide();
});
$(function () {
    $('form').bind('submit', function (event) {
        
        if($("#terms").prop('checked') == true){
            //do something
        }else{
            alert("Please Check Terms & conditions..");
            return false;
        }
    // using this page stop being refreshing 
    event.preventDefault();

      $.ajax({
        type: 'POST',
        url: 'controller/offer.php',
        dataType: 'jsonp',
        data: $('form').serialize(),
        beforeSend: function() {
            $("#progress").show();
        },
        success: function () {
          $("#progress").hide();
          $("#stauts").html("Form was submitted..");
        },
        error: function(xhr) { // if error occured
        },
        complete: function() {
            $("#progress").hide();
        }
      });
    });
  });