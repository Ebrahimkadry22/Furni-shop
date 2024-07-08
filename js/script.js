
const menuBtn = document.getElementById('meun_btn'),
navlinks = document.getElementById("nav_links"),
menuBtnicon = menuBtn.querySelector("i");


menuBtn.addEventListener('click' , (e) => {
  navlinks.classList.toggle('open')

  const isOpen = navlinks.classList.contains("open");
  menuBtnicon.setAttribute('class',isOpen ? "ri-close-line" : "ri-menu-line")
})

navlinks.addEventListener('click' , (e)=> {
  navlinks.classList.remove('open');
  menuBtnicon.setAttribute('class','ri-menu-line')
})


const navSearch = document.getElementById("nav_search");

navSearch.addEventListener('click',(e)=> {
  navSearch.classList.toggle('open')
  
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  

  
});

const  ScrollRevealOption = {
  distance : "50px",
  origin: "bottom",
  duration:"1000"
}
ScrollReveal().reveal(".header_img img", 
  {
    ...ScrollRevealOption,
    origin:"right"
  }
);
ScrollReveal().reveal(".header_content div", 
  {
    duration:"1000",
    delay:"500",
    
  }
);
ScrollReveal().reveal(".header_content div h1", 
  {
    
    delay:"1000",
    
  }
);
ScrollReveal().reveal(".header_content div p", 
  {
    
    delay:"1500",
    
  }
);
ScrollReveal().reveal(".deals_card", 
  {
    ...ScrollRevealOption,
    interval:500   
  }
);
ScrollReveal().reveal(".about_img img", 
  {
    ...ScrollRevealOption,
   origin:'right'  
  }
);
ScrollReveal().reveal(".about_card", 
  {
    duration:1000,
    interval:500,
    delay:500
  }
);
ScrollReveal().reveal(".product-container .section_header", 
  {
    ...ScrollRevealOption,
    origin:'left'  
  }
);
ScrollReveal().reveal(".product-card", 
  {
    duration:1000,
    interval:500,
    delay:100
  }
);

ScrollReveal().reveal(".client-container", 
  {
    ...ScrollRevealOption,
    origin:'top'  
  }
);
ScrollReveal().reveal(".client-content .section_header", 
  {
    delay:500  
  }
);
ScrollReveal().reveal(".client-content .section_description", 
  {
    delay:1000  
  }
);
ScrollReveal().reveal(".swiper", 
  {
    delay:1000  
  }
);


