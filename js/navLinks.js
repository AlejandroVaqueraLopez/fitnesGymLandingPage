let btnLogo = document.getElementById("btnLogo");
let btnHome = document.getElementById("btnHome");
let btnWhyUs = document.getElementById("btnWhyUs");
let btnShop = document.getElementById("btnShop");
let btnAbout = document.getElementById("btnAbout");

let whyUs = document.getElementById("whyUs");
let shop = document.getElementById("shop");
let about = document.getElementById("about");

function closeNavbar(){
    if(window.innerWidth < 800){
        navbarList.style.display = "none";
        navbarToggle = false;
    }
}

btnLogo.addEventListener("click",()=>{
    closeNavbar();
    window.scrollTo(
        {
            top:0,
            behavior:"smooth"
        }
    );
});

btnHome.addEventListener("click",()=>{
    closeNavbar();
    window.scrollTo(
        {
            top:0,
            behavior:"smooth"
        }
    );
});

btnWhyUs.addEventListener("click",()=>{
    closeNavbar();
    window.scrollTo(
        {
            top:whyUs.getBoundingClientRect().top + window.scrollY,
            behavior:"smooth"
        }
    );
});

btnShop.addEventListener("click",()=>{
    closeNavbar();
    window.scrollTo(
        {
            top:shop.getBoundingClientRect().top + window.scrollY,
            behavior:"smooth"
        }
    );
});

btnAbout.addEventListener("click",()=>{
    closeNavbar();
    window.scrollTo(
        {
            top:about.getBoundingClientRect().top + window.scrollY,
            behavior:"smooth"
        }
    );
});
