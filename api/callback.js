
$(document).ready(function() {
    $('#dthRechargeBill').submit(function(e) {
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
                var len = response.data.length;
                for (i = 0; i < len; i++) {
                    var id = response.data[i]['price'];
                    var name = response.data[i]['name'];
                    var sign = '&#8358; ';
                    $("#DTHamount").append("<option value='"+id+"'>" +sign+  +id+ ' = ' +name+  "</option>");
                }
            
        }
        
    });
});
       $('#DTHamount').on('change', function(){
        var datacode1 = this.value;
         $("#datacode").val(function() {
            return this.value + datacode1;
        });
    });
     $body = $("body");
      $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
            ajaxStop: function() { $body.removeClass("loading"); }    
        });
});