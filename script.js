const menus = document.querySelector("nav ul");
const header = document.querySelector('header');
const menubtn= document.querySelector(".menu-btn");
const closebtn= document.querySelector(".close-btn");
menubtn.addEventListener("click",() => {
    menus.classList.add("display");
});
closebtn.addEventListener("click",() => {
    menus.classList.remove("display");
});
//scroll sticky navbar//
window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
});
//static counter//
const countersEL = document.querySelectorAll(".numbers");
countersEL.forEach((counters)=>{
    counters.textContent=0;
    increamentCounters();
    function increamentCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");
        const increament = dataCeil / 25;
        currentNum = Math.ceil(currentNum+increament);

        if(currentNum<dataCeil){
            counters.textContent = currentNum;
            setTimeout(increamentCounters, 70);
        }else{
            counters.textContent = dataCeil;
        }
    }
})
//search
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("#location-search form");
    const searchButton = document.querySelector("#searchButton");

    // Add event listener to the search button
    searchButton.addEventListener("click", function(event) {
        // Submit the form
        searchForm.submit();

        // Reset the form after submission
        setTimeout(function() {
            searchForm.reset();
        }, 100); // Adjust the delay as needed
    });
});
