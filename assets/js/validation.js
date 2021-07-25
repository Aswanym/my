
/* form actions */
function nameValidation(){
    console.log("test")
   var check1 = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   var name1 = $("#name").val();
   
   if(name1==""){
       
       $("#nameError").html("This field is required!");
       return false;
   }else if(check1.test(name1)){
       $("#nameError").html("");
       return true;}
  }
 
 function emailValidation(){
     console.log("2")
   var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/; 
   var email = $("#email").val();
   if(email==""){
      $("#emailError").html("This field is required!");
       return false;
   }else if(email.match(pattern)){
      $("#emailError").html("");
       return true;
   }else{
       $("#emailError").html("Enter a valid email");
       return false;
   }
 }
 
 function phoneValidation(){
   var num = (/[^\d]/,'')
   var number = $("#phoneno").val();
   
   if(isNaN(number) ){
       $("#phoneError").html("Enter a valid number.");
       return false
   }
   else if(number ==""){
       $("#phoneError").html("This feild is required!") ;
       return false
   }else if(number.match(num)){
    console.log("5")
       $("#phoneError").html("");
       return true
   }else if(number.length<10){
           $("#phoneError").html("Enter 10 digit number.") ;
           return false
        }
       
       
     else if(number.length>10){
           $("#phoneError").html("Number exceeded 10 digit.");
           return false
       }
       
   
 }
 
$(document).ready(function(){
    $("#name").keyup(function(){
      nameValidation()
    });
    $("#email").keyup(function(){
      emailValidation()
    });
    $("#phoneno").keyup(function(){
      phoneValidation()
    })

    $("#submit-form").submit((e)=>{
        e.preventDefault()
        if(nameValidation() &&emailValidation()&&phoneValidation()){
        $("#submitError").fadeOut();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxRvmz-TOzNZggP1Zq3NzP0ulJbvquNsUtVopH9cGvZSXf_tOtJHAwLhBFkFpz4bQOE/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            swal("Form submitted successfully.").then(function(){
                window.location.reload()

            });
            // alert("submitted successfully.")
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
        }
    })}else{
        nameValidation() 
        emailValidation() 
        phoneValidation()
    }
})
  })
  
  