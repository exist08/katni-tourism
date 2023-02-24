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