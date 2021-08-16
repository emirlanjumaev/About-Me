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




/*------------------------- PORTFOLIO FILTER AND POPUP ----------------------------- */
(()=>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    close = popup.querySelector(".pp-close"),
    projectDetalisContainer = popup.querySelector(".pp-detalis"),
    projectDetalisBtn = popup.querySelectorAll(".pp-project-detalis-btn");

    let itemIndex, slideIndex, screenshots;
    
    /* filter portfolio items */

    filterContainer.addEventListener('click', function(event){

        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){

            filterContainer.querySelector(".active").classList.remove(
            "active")
            
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
                }
            })
        
        }

    })

    portfolioContainer.addEventListener('click', function(event){
    if(event.target.closest(".portfolio-item-inner")){
        const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
        itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
        screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img").getAttribute("data-scrinshots");
        console.log(screenshots)
    }

    })



})()    
