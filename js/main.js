const bikeData=[
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/bike.webp",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/black.webp",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/white.webp",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/yellow.jpg",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/red.jpg",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/orange.jpg",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/blue.jpg",
        tag:"Free Cancellation",


    },
    {
        name:"BMW R1300GS",
        type:"ADVENTURE",
        price:17,
        image:"images/pink.jpg",
        tag:"Free Cancellation",


    }


]
//Function to create bike box element
const createBikeBox=(bike)=>`
<div class="bike-box">
                <img src="${bike.image}" alt="" class="box-img">
                <div class="title-price">
                    <div class="title-data">
                        <h2>${bike.name}</h2>
                        <p>${bike.type}</p>
                    </div>
                    <h3 class="bike-price">$${bike.price}<span>/hour</span></h3>
                </div>
                <a href="#" class="book-btn">Book Bike</a>
                <span class="tag">${bike.tag}</span>
            </div>
`;
const bikeContent=document.querySelector('.bikes-content');
// create bike box and show;
bikeData.forEach((bike)=>{
    const bikeBoxHtml=createBikeBox(bike);
    bikeContent.insertAdjacentHTML("beforeend",bikeBoxHtml);
})
// swiper
var swiper = new Swiper(".destination-container", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
        320:{
            slidesPerView:1,
            spaceBetween:10,
        },
        510:{
            slidesPerView:2,
            spaceBetween:10,
        },
        750:{
            slidesPerView:3,
            spaceBetween:15,
        },
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
        280:{
            slidesPerView:4,
            spaceBetween:20,
        },

    }
    
  });
//menu
let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}