function sendEmail(){
    var tempPara ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_yhz4w54', 'template_39k4vj5', tempPara)
    .then(function(res){
        console.log("success",res.status);
    })
}



