$(document).ready(function(e){
   
    $("#signup").validate({
        rules:{
            name:{
                required:true
            },
            email:{
                required:true
            },
            password:{
                required:true
            }
        },
        messages:{
            name:{  
                required:"pls enter first name"
            },
            email:{
                required:"pls enter Email"
            },
            password:{
                required:"pls enter Password"
            },
        },
          errorClass: "text-danger ml-14",


    })
})