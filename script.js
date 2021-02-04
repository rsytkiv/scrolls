firstScroll = document.getElementById('firstScroll');
console.log(firstScroll);
document.addEventListener('scroll', function(e) {
    console.log(scrollY);
    if(window.scrollY > 100 && window.scrollY < 400 ){
        firstScroll.style.fontSize = `${window.scrollY/5}px`
    }
    if(window.scrollY > 400 && window.scrollY < 700){
        document.getElementById('secondContent').style.paddingLeft = `${window.scrollY/3}px`;
        document.getElementById('polos').style.width = `${window.scrollY/2}px`;
    }
    if(window.scrollY > 700 && window.scrollY < 1100){
        document.getElementById('image').style.paddingRight = `${window.scrollY/3}px`;
    }
    if(window.scrollY > 970){
        document.getElementById('secondScroll').style.fontSize = `${100 - window.scrollY / 25 + 10}px`;
    }

})
document.getElementById('firstScroll').addEventListener('click', function(){
    window.scroll({
        behavior: "smooth",
        top: 773
    })
});
document.getElementById('secondScroll').addEventListener('click', function(){
    window.scroll({
        behavior: "smooth",
        top: 0
    })
})