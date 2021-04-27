var horsey = document.querySelector("#horse");

horsey.addEventListener("mouseover", function(){
    this.play()
})

horsey.addEventListener("mouseout", function(){
    this.pause();
})
