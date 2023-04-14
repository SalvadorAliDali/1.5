document.addEventListener('DOMContentLoaded', function() {

  if (window.matchMedia("(min-width: 320px) and (max-width: 768px)").matches) {
   
    const swiper = new Swiper('.swiper', {
     
      direction: 'horizontal',
      loop: true,
  
  
      pagination: {
        el: '.swiper-pagination',
      },
  
      slidesPerView:`1.3`,
  
    });
  } else {
  }
});


const slides = document.querySelectorAll('.swiper-slide');
const lastSlides = Array.from(slides).slice(-3);
const toggleBtn = document.querySelector('.toggle-btn');


function toggleSlides() {
  lastSlides.forEach(slide => {
    if (slide.style.display === 'none') {
      slide.style.display = 'inline-block';
    } else {
      slide.style.display = 'none';
    }
  });


  if (toggleBtn.textContent === 'Показать еще') {
    toggleBtn.textContent = 'Скрыть';
  } else if (toggleBtn.textContent === 'Скрыть'){
    toggleBtn.textContent = 'Показать еще';
  }
}


toggleBtn.addEventListener('click', toggleSlides);


 
