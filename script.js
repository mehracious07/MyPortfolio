// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
        
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
            });
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
   } 

const form=document.querySelector("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");

function sendEmail() {
    const bodyMessage=`Full Name:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br>  Message:${mess.value}`;

    Email.send({
        SecureToken:"0f5ea77a-d481-464d-b837-ee23fee5a857 ",
        Host : "smtp.elasticemail.com",
        Username : "mehrasanjay619@gmail.com",
        Password : "0AD1DB2BACB2CF26AEA762B7B9F121BC1172",
        To : 'mehrasanjay619@gmail.com',
        From : "mehrasanjay619@gmail.com",
        Subject : subject.value,
        Body :bodyMessage
    }).then(
      message =>{
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

// function checkInputs(){
//     const items=document.querySelectorAll(".items");
// for(const item of items){
//     if(item.value==""){
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//     }

//     if(items[1].value!=""){
//         checkEmail();
//     }

//     items[1].addEventListener("keyup",()=>{
//         checkEmail();
//     });
    
//     item.addEventListener("keyup",()=>{
//         if(item.value!=""){
//             item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//         }
//         else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//              }
//     });
//   }
// }

// function checkEmail(){
//     const emailRegex=/ ^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/;
//     if(!email.value.match(emailRegex)){
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value!=""){
//             errorTxtEmail.innerText="Enter a valid email address";
//         }
//         else{
//             errorTxtEmail.innerText="Email address cant be blank";
//         }
//     }
//     else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

  form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
  })
   
   