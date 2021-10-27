
//Sidebar

let menuIcon = document.getElementById('menu-icon');
let closeBtns = document.querySelectorAll('.closebtn');
let header = document.getElementById('header');
let body = document.getElementById('body');


menuIcon.addEventListener('click', openNav);
header.addEventListener('click',closeBtnFunc);
body.addEventListener('click',closeBtnFunc);


function openNav(e) {
    if(e.target.className = 'menu-icon'){
        document.getElementById("mySidenav").style.width = "320px";
    } 
}




function closeBtnFunc(e){
    closeBtns.forEach(function(closeBtn){
        closeBtn.addEventListener('click', function(e){
            document.getElementById("mySidenav").style.width = "0px";
           
            
        });
    });

    if( (e.target.className !== 'menu-icon') && (document.getElementById('mySidenav').checked !== true)){
        document.getElementById("mySidenav").style.width = "0px";
    }
  
};

closeBtnFunc();

