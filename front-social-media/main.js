function burgerFunction(){
    var burger_menu=document.querySelector('.nav-menu-burger');
    if(burger_menu.style.display==='block'){
        burger_menu.style.display='none';
    }
    else{
        
        burger_menu.style.display='block';
    }
}

function heartIconFunction(){
    var heart_icon=document.querySelector('.nav-drop-heart');
    if(heart_icon.style.display==='block'){
        heart_icon.style.display='none';
    }
    else{
        heart_icon.style.display='block';
    }
}

function bellIconFunction(){
    var bell_icon=document.querySelector('.nav-drop-bell');
    if(bell_icon.style.display==='block'){
        bell_icon.style.display='none';
    }
    else{
        bell_icon.style.display='block';
    }
}

function envelopeIconFunction(){
    var envelope_icon=document.querySelector('.nav-drop-envelope');
    if(envelope_icon.style.display==='block'){
        envelope_icon.style.display='none';
    }
    else{
        envelope_icon.style.display='block';
    }
}

function accountImageFunction(){
    var account_image=document.querySelector('.nav-drop-account');
    if(account_image.style.display==='block'){
        account_image.style.display='none';
    }
    else{
        account_image.style.display='block';
    }
}
function accountvisibleFunction(){
    var account_visible=document.querySelector('.account-dropdown');
    var account_dropdown=document.querySelector('.nav-drop-account');
    if(account_visible.style.display==='block'){
        account_dropdown.style.display='block';
    }
    else{
        account_image.style.display='none';
    }
}
function isactiveFunction() {
    var element = document.querySelector("pageloader");
    element.classList.toggle(".is-act");
  }
function areactiveFunction() {
    var element = document.querySelector("infraloader");
    element.classList.toggle(".are-active");
  }