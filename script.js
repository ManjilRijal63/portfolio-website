// console.log("hello")

//select menubar

let menubar=document.querySelector('.menu_bar')
let navElements =document.querySelector('.nav_elements')
console.log(menubar)
console.log(navElements)
let closebar =document.querySelector('.close_bar');
//add event listener


menubar.addEventListener('click', function ()
{
    //console.log("clicked-menu-bar")
    navElements.style.display="block";
    closebar.style.display= "block";
    menubar.style.display="none";
})

closebar.addEventListener('click', function ()
{
    //console.log("clicked-menu-bar")
    navElements.style.display="none";
    closebar.style.display= "none";
    menubar.style.display="block";
})


//carousal start


const slides = document.querySelectorAll('.slide');
//console.log(slides)
const prevButton= document.querySelector(".prev_button");
const nextButton = document.querySelector(".next_button");



let maxlength = slides.length-1;
//console.log(maxlength)




let currentslide=0;

slides.forEach((slide, index)=>
{
    //console.log(slide)
    slide.style.transform =`translateX(${ (index-currentslide) *100}%)`
   // console.log(index*100)


})

nextButton.addEventListener('click', function(){

if(currentslide === maxlength)
{
    currentslide=0
}
else{
    currentslide++;
}






//alert('next _button clicked')

//console.log(currentslide)
slides.forEach((slide, index)=>
{
    //console.log(slide)
    slide.style.transform =`translateX(${ (index-currentslide) *100}%)`
   // console.log(index*100)


})

})



prevButton.addEventListener('click', function()
{
//alert('prev_button clicked')



})


























