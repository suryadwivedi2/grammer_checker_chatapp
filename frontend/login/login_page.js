
function redirect(event){
    event.preventDefault();
    window.location.href='../signup/signup_page.html';
}



async function getformvalue(event){
    event.preventDefault();
try{
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;
    let userdata={
        "email":email,
        "password":password
    }
   const res=await axios.post('http://localhost:4000/chatapp/login-user',userdata);
   if(res.status==201){
    localStorage.setItem('token',res.data.token);
    alert("Welcome");
   window.location.href='../mainapp/mainapp.html';
   }else{
    throw new Error('something went error');
   }
}catch(err){
    console.log(err);
}
}



