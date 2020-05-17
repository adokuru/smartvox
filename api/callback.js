
$(document).ready(function() {
    $('#recharge-bill').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'api/baxi.php',
            data: $(this).serialize(),
            dataType: "json",
			success: function(response) {
			console.log(response);
               swal(response.message, response.data.transactionMessage, response.status);

			}
       });
     });
     $('#dataoperator').on('change', function(){
        var dataoperator = this.value;
    
         $.ajax({
            type: "POST",
            url: 'api/baxi.php',
            data: { 
            id: 1, 
            dataoperator: dataoperator
           },
            dataType: "json",
            success: function(response) {
            console.log(response);
            }
    });
});
     $body = $("body");
      $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });
});