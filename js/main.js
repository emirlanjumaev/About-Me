/*------------------------------  ABOUT SECTION TABS  --------------------------------------*/
(()=>{

    const aboutSection = document.querySelector('.about-section'),tabsContainer = document.querySelector('.about-tabs');
    tabsContainer.addEventListener('click', function(event){
        /* if event.target contains 'tab-item' class and not contains "active" */
        let tab  = tabsContainer;

        if(event.target.classList.contains('tab-item') && 
        !event.target.classList.contains('active')
        )
        {
            const target = event.target.getAttribute("data-target");

            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active")
            // ACTIVATE NEW TAB

            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector('.tab-content.active').classList.remove('active')
        
            // ACTIVATE NEW 'TAB-CONTENT'
            aboutSection.querySelector(target).classList.add('active')
        }

    })
})();


function bodyScrollingToggle(){
    document.body.classList.toggle("stopScrolling");
}



/*------------------------- PORTFOLIO FILTER AND POPUP ----------------------------- */
(()=>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = document.querySelector(".pp-prev"),
    nextBtn = document.querySelector(".pp-next"),
    close = document.querySelector(".pp-close"),
    projectDetalisContainer = popup.querySelector(".pp-detalis"),
    projectDetalisBtn = popup.querySelectorAll(".pp-project-detalis-btn");

    let itemIndex, slideIndex, scrinshots;
    
    /* filter portfolio items */

    filterContainer.addEventListener('click', function(event){

        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){

            filterContainer.querySelector(".active").classList.remove(
            "active");
            
            event.target.classList.add('active');
            const target = event.target.getAttribute("data-target");
            
            portfolioItems.forEach((item)=>{
                console.log(target)
                if(target === item.getAttribute("data-category") || target === "all" ){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                };
            });
        
        };

    });

   

    portfolioContainer.addEventListener('click', function(event){
        if(event.target.closest(".portfolio-irem-inner")){
            const portfolioItem = event.target.closest(".portfolio-irem-inner").parentElement;

            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem)

            scrinshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-scrinshots");
            scrinshots = scrinshots.split(",");
            slideIndex = 0;
            popupToggle();
            popupSlideshow()
            // popupDetalis();
        };
    });
    
    close.addEventListener("click", ()=>{
        popupToggle();
    })

    function popupToggle(){

        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

           
    function popupSlideshow(){
        const imgSrc = scrinshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src=imgSrc;
        popupImg.onload = () =>{

        popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " +scrinshots.length;
    }

 
})();    
 

(()=>{

    const sliderContainer = document.querySelector('.testi-slider-container'),
    slides = sliderContainer.querySelectorAll('.testi-item'),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector('.testi-slider-nav .prev');
    nextBtn = document.querySelector('.testi-slider-nav .next');
    activeSlide = sliderContainer.querySelector('.testi-item.active')
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    console.log(slideIndex)

    slides.forEach(function(slide){
        slide.style.width = slideWidth + "px";
    })

    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener('click', () =>{

     if (slideIndex === slides.length-1){
         slideIndex = 0;
     }
     else{
         slideIndex++
     }
     
    slider()
    })

    prevBtn.addEventListener('click', ()=>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
    slider()
    })
    function slider(){
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");

        slides[slideIndex].classList.add("active")
    sliderContainer.style.marginLeft =  - (slideWidth * slideIndex) + "px";

    }
})()