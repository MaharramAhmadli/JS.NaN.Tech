const pasword=document.getElementById("ps");
const yeni=document.getElementById("see");
function showhide(){
    if(pasword.type==='password'){
        pasword.setAttribute('type','text');
        yeni.classList.add('hide')
    }
    else{
        pasword.setAttribute('type','password')
        yeni.classList.remove('hide')
    }
}

