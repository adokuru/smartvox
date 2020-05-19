$(document).ready(function() {
    $('#electserviceNumber').focusout(function(e) {
         $.ajax({
            type: "POST",
            url: 'api/elect.php',
            data: $('#electricityBill').serialize(),
            dataType: "json",
            success: function(response) {
                 console.log(response.code);
                 if (response.code === 200) {
                        if (response.data.name === "") {
                            console.log(response);
                            swal({
                              icon: 'error',
                              title: 'Oops... Something went wrong',
                              text: 'Confirm your Meter Number!',
                              footer: '<a href>Why do I have this issue?</a>'
                            })
                            $('#electamount').attr('disabled');
                        }else{
                            console.log(response);
                            swal({
                            title: response.message, 
                            text: 'Account Name = ' + response.data.name, 
                            icon: response.status,
                            timer: 3000,
                            buttons: false,
                            });$('#electamount').removeAttr('disabled'); 
                            }
                    }else{
                        console.log(response);
                         swal({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Something went wrong! Try again'
                            })
                         $('#electamount').attr('disabled');
                    }
                 }
                
            
        })    
    });

         $('#third-tab').click(function(){
         $.ajax({
            type: "POST",
            url: 'api/baxi.php',
            data: { 
            eid: 1, 
            eids: 2
           },
            dataType: "json",
            success: function(response) {
               
                var len = response.data.providers.length;
                 for (i = 0; i < len; i++) {
                    var id = response.data.providers[i]['service_type'];
                    var name = response.data.providers[i]['name'];
                   
                  $("#electricityBillop").append("<option value='"+id+"'>"  +name+  "</option>");
                 }
            
        }
        
    });
});
    $('#electricityBill').submit(function(e) {
         $.ajax({
            type: "POST",
            url: 'api/baxi.php',
            data: $(this).serialize()+ "&ebill=1",
            dataType: "json",
            success: function(response) {
                console.log(response);               
                 }            
        })        
    });
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