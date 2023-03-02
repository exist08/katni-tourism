// $(document).ready(()=>{
//     let temp = $('.content').is(':visible')
//     if(temp) {
//         $('.content ul li').fadeIn()
//     }
// })

enterView({
    selector: '.content',
    enter: function(el){
        el.classList.add('entered')
    },
})

let loader = document.getElementById('loader')
document.addEventListener('load', ()=>{
    loader.style.display = 'none'
})