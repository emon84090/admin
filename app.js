let profileImg = document.querySelector('.sidebar-profile-image');

profileImg.addEventListener('click', () => {
     profileImg.classList.toggle('clicked');
})

// const sidebarMenu = document.querySelector('.sidebar-menu');

// sidebarMenu.addEventListener('click', (event) => {
//      let dropdownItems = event.target.parentElement;
    

//           dropdownItems.querySelector('.item-dropdown').classList.toggle('active')


     
// })

const dropItems=document.querySelectorAll('.dropdown-items-content');
for (let i = 0; i < dropItems.length; i++) {
     dropItems[i].addEventListener('click',(event)=>{
          let dropdownItems = event.target;
          
               
          dropdownItems.querySelector('.item-dropdown').classList.toggle('active')
         
          

     })
     
}




let toggleMenu=document.querySelector('.navbar-toggler');
let fullSidebar=document.querySelector('.sidebar');
let mainBody=document.querySelector('.main-body');
let fullBody=document.querySelector('body');
let html=document.querySelector('html')
let closeMenu=document.querySelector('.sidebar-close i');

toggleMenu.addEventListener('click',()=>{
     fullSidebar.classList.add('show');
     
     
})
closeMenu.addEventListener('click',()=>{
     fullSidebar.classList.remove('show');
})

// notification

let notiBtn=document.querySelector('.notifications-box i');
let notiBox=document.querySelector('.notification-box-content');
notiBtn.addEventListener('click',()=>{
     notiBox.classList.toggle('show');
})

// notification

document.onclick=function(event){
if (event.target.id !=="notibox" && event.target.id !=="not") {
     notiBox.classList.remove('show')

     
}
}


// dark light mode
if (!localStorage.getItem('bodyTheme')) {
     localStorage.setItem('bodyTheme','light');
}
let themeCheckbox=document.querySelector('#btheme');
let themeChangeicon=document.querySelector('.body-theme i');

function getBodytheme(){
     let myTheme=localStorage.getItem('bodyTheme');
     if(myTheme=="dark"){
          themeChangeicon.setAttribute('class','bx bxs-sun')
          fullBody.classList.remove('light')
     }else{
          themeChangeicon.setAttribute('class','bx bxs-moon')
          fullBody.classList.remove('dark')
     }
     
    fullBody.classList.add(myTheme);
}
getBodytheme()
themeCheckbox.addEventListener('change',function(){
     if (themeCheckbox.checked) {
          localStorage.setItem('bodyTheme','dark')
         
     }else{
          localStorage.setItem('bodyTheme','light')
     } 
     // fullBody.classList="";
     getBodytheme()
})

// dark light mode



// body-theme
if (!localStorage.getItem('bodyalltheme')) {
     localStorage.setItem('bodyalltheme','normal-theme');
}
const themesItem=document.querySelectorAll('.themeitems');
function getbodyAlltheme(){
     let bodyallTheme=localStorage.getItem('bodyalltheme');
     if (bodyallTheme=="normal-theme") {
          fullBody.classList.remove('theme-1');
          fullBody.classList.remove('theme-2');
     }
     if (bodyallTheme=="theme-1") {
          fullBody.classList.remove('normal-theme');
          fullBody.classList.remove('theme-2');
     }
     if (bodyallTheme=="theme-2") {
          fullBody.classList.remove('theme-1');
          fullBody.classList.remove('normal-theme');
     }
     fullBody.classList.add(bodyallTheme);
}
getbodyAlltheme();
for (let x = 0; x < themesItem.length; x++) {
     themesItem[x].addEventListener('click',(event)=>{
          localStorage.setItem('bodyalltheme',event.target.getAttribute('data-theme'));
          // fullBody.classList="";
          getbodyAlltheme();
          

     })
     
}

// body-theme




// document.onclick=function(event){
//      if (event.target.id !=="sidebar" && event.target.id !=="navbar-toggler") {
//           fullSidebar.classList.remove('show');
     
//           console.log(event.target.classList)
//      }
//      }