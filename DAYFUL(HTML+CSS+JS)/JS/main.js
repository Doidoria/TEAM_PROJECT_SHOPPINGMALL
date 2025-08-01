const slideWrapper = document.querySelector('.slide-wrapper')
const slides = document.querySelectorAll('.slide-wrapper img')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let currentIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    slideWrapper.style.transform = `translateX(-${slideWidth * currentIndex}px)`
}
btnNext.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1) % slides.length
    updateSlidePosition()
})
btnPrev.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateSlidePosition()
})

const btns = document.querySelectorAll('.watchlist-btn')
btns.forEach((btn)=>{
    const img = btn.querySelector('img')

    btn.addEventListener('click',()=>{
        if (img.src.includes('watchlist-OFF.png')){
            img.src = './images/watchlist-ON.png'
            img.alt = '관심목록 추가됨'
        } else{
            img.src = './images/watchlist-OFF.png'
            img.alt = '관심목록 추가 안됨'
        }
    })
})

const swiperTopBest=new Swiper('.main-topbest .swiper',{
            direction: 'horizontal',
            loop: true,
            autoplay:{
                delay:3500,
                pauseOnMouseEnter : true,
            },

            pagination: {
                el: '.swiper .swiper-pagination',
                clickable:true,
                type:'bullets',
            },

            navigation: {
                nextEl: '.swiper .swiper-button-next',
                prevEl: '.swiper .swiper-button-prev',
            },
        })