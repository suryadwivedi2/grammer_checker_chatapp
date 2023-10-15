const token = localStorage.getItem('token');


const decodetoken = parseJwt(token);

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}



//for sending messages

async function getmsg(event) {
    event.preventDefault();
    const msg = document.getElementById('msg').value;
    const txt = document.getElementById('insert');

    let data = {
        message: msg
    }

    const res = await axios.post('http://localhost:4000/message/add-msg', data, { headers: { 'Authorization': token } });
    if (res.status == 200) {
        console.log("sucessfully created");
        console.log(decodetoken.username);
        txt.innerHTML += `<div>${decodetoken.username}   =>  ${msg}</div>`
        document.getElementById('msg').value = " ";

    } else if (res.status == 201) {
        txt.innerHTML += '<div><p>something went wrong!</p></div>'
    }
}




window.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await axios.get('http://localhost:4000/message/get-msg');
        if (res.status == 200) {
            console.log(res.data.mgses);
            for(let i=0;i<res.data.mgses.length;i++){
                showmsges(res.data.mgses[i]);
            }
        } else {
            throw new Error('something went wrong')
        }

    } catch (err) {
        console.log(err)
    }
})



function showmsges(data){
    const txt=document.getElementById('insert');
    txt.innerHTML+=`<div>${data.username}  =>  ${data.message}</div>`
}