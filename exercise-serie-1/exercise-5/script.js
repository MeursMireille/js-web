//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false


var cat = $('.cat-carousel');
cat.catCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    cat.trigger('play.cat.autoplay',[1000])
})
$('.stop').on('click',function(){
    cat.trigger('stop.cat.autoplay')
})
