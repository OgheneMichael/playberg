function svgFill() {
    const tapTarget = document.querySelectorAll(".tap-target");
    
    for (var i = 0; i < tapTarget.length; i++) {
        tapTarget[i].addEventListener("click", function () {
            this.classList.toggle("active")
        })
    }
}

svgFill()

plyr.setup();