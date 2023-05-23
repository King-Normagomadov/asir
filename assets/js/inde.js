function sendEmail(){ 
    
    document.getElementById("sub").innerText="Sending...";
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("msg").value
    };

    
const serviceID= "service_vdd2nl8";
const templateID= "template_xd4ubmg";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("sub").innerText="Send Message";
    alert('Message Sent.')
    })
    .catch(console.log('Email is Sending...'));
}

