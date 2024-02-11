let searchForm=document.querySelector('.search-form')
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    formLogin.classList.remove('active')
    navBar.classList.remove('active')
}

let shoppingCart=document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>
{
    searchForm.classList.remove('active')
    shoppingCart.classList.toggle('active')
    formLogin.classList.remove('active')
    navBar.classList.remove('active')
}

let formLogin=document.querySelector('.login-form')
document.querySelector('#login-buton').onclick=()=>
{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    formLogin.classList.toggle('active')
    navBar.classList.remove('active')
}

let navBar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick=()=>
{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    formLogin.classList.remove('active')
    navBar.classList.toggle('active')
}





window.onscroll=()=>
{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    formLogin.classList.remove('active')
    navBar.classList.remove('active')
}


var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });