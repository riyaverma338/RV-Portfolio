function sendEmail(para){
    var tempPara ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

//YOU CAN PUT THIS INSIDE AN IF STATEMENT WHEN ADDING VALIDATIONS
    emailjs.send('service_yhz4w54', 'template_39k4vj5', tempPara)
      .then(function(res){
          console.log("success",res.status);
      })
  }


//   emailjs.send('service_yhz4w54', 'template_39k4vj5', tempPara)
//       .then((result) => {
//           console.log(result);
//       }, (error) => {
//           console.log(error.text);
//       });