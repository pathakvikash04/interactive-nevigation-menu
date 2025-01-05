document.addEventListener("DOMContentLoaded",function(){
    const home=document.querySelector(".home")
    const about=document.querySelector(".about")
    const feedback=document.querySelector(".feedback")
    const help=document.querySelector(".help")
    const services=document.querySelector(".services")
    home.addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)"
        this.style.backgroundColor="rgb(219, 248, 237)"
    })
    home.addEventListener("mouseout",function(){
        this.style.transform="scale(1)"
        this.style.backgroundColor="rgb(183, 213, 208)"
    })
    about.addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)"
        this.style.backgroundColor="rgb(219, 248, 237)"
    })
    about.addEventListener("mouseout",function(){
        this.style.transform="scale(1)"
        this.style.backgroundColor="rgb(183, 213, 208)"
    })
    help.addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)"
        this.style.backgroundColor="rgb(219, 248, 237)"
    })
    help.addEventListener("mouseout",function(){
        this.style.transform="scale(1)";
        this.style.backgroundColor="rgb(183, 213, 208)"
        
    })
    services.addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)"
        this.style.backgroundColor="rgb(219, 248, 237)"
    })
    services.addEventListener("mouseout",function(){
        this.style.transform="scale(1)"
        this.style.backgroundColor="rgb(183, 213, 208)"
    })
    feedback.addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)"
        this.style.backgroundColor="rgb(219, 248, 237)"
    })
    feedback.addEventListener("mouseout",function(){
        this.style.transform="scale(1)"
        this.style.backgroundColor="rgb(183, 213, 208)"
    })

})