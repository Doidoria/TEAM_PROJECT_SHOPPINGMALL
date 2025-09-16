// const btns = document.querySelectorAll('.watchlist-btn')
// btns.forEach((btn)=>{
//     const img = btn.querySelector('img')

//     btn.addEventListener('click',()=>{
//         if (img.src.includes('watchlist-OFF.png')){
//             img.src = './images/watchlist-ON.png'
//             img.alt = '관심목록 추가됨'
//         } else{
//             img.src = './images/watchlist-OFF.png'
//             img.alt = '관심목록 추가 안됨'
//         }
//     })
// })

/* Main slide */
const swiperMain = new Swiper('section .main-slide .swiper', {
    direction:'horizontal',
    speed:700,
    loop:true,
    autoplay:{
        delay:6000,
        pauseOnMouseEnter : true,
    },
    pagination: {
        el:'.swiper .swiper-pagination',
        type:'fraction',
    },
    navigation: {
        nextEl:'.swiper .swiper-button-next',
        prevEl:'.swiper .swiper-button-prev',
    },
})

/* Product slide */
const swiperProduct = new Swiper('.tabs-wrap .swiper', {
    direction:'horizontal',
    speed:700,
    pagination: {
        el:'.swiper .swiper-pagination',
        clickable:true,
        type:'bullets',
    }
})

/* Product Tab-box Active */
document.addEventListener("DOMContentLoaded",()=>{
    const TabAs=document.querySelectorAll('.tabs-list li')
    const TabAt=document.querySelectorAll('.tabs-wrap .tab-box')

    TabAs.forEach((As,index)=>{
        As.addEventListener("click",(e)=>{
            e.preventDefault()
            TabAt.forEach(box=>box.classList.remove("active"))
            TabAs.forEach(l=>l.classList.remove("active"))
            As.classList.add("active")
            TabAt[index].classList.add("active")
        })
    })
})



/* Scroll-Menu */
let scrollState=0;
const ScrollMenu=document.getElementById("scroll-menu")
document.addEventListener('scroll',(e)=>{
    // console.log('scrollY',window.scrollY)
    if(window.scrollY>=900){
        ScrollMenu.classList.add('sfixed')
    }
    if(window.scrollY<900){
        ScrollMenu.classList.remove('sfixed')
    }
})
const ScrollMenu2=document.querySelectorAll("#scroll-menu a")
document.addEventListener('scroll',(e)=>{
    if(window.scrollY>=2872){
        ScrollMenu2.forEach(el=>el.classList.add('bgf'))
    }
    if(window.scrollY<2871){
        ScrollMenu2.forEach(el=>el.classList.remove('bgf'))
    }
})

/* Skintype Scroll-fade */
const SkintypeScroll=document.querySelector('.Skin-type dl dt')
const SkintypeScroll2=document.querySelector('.Skin-type dl dd p')
const SkintypeScroll3=document.querySelector('.Skin-type dl dd p.second')

document.addEventListener('scroll',(e)=>{
    // console.log('scrollY',window.scrollY)
    if(window.scrollY>=1200){
        SkintypeScroll.classList.add('on')
    }
    if(window.scrollY>=1250){
        SkintypeScroll2.classList.add('on')
    }
    if(window.scrollY>=1270){
        SkintypeScroll3.classList.add('on')
    }
    if(window.scrollY<1100){
        SkintypeScroll.classList.remove('on')
        SkintypeScroll2.classList.remove('on')
        SkintypeScroll3.classList.remove('on')
    }
})
