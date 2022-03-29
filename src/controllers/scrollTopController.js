export function scrollHandler(){
    window.addEventListener("scroll", ()=>{
        const element = document.getElementById("scrollTop");
        if(window.scrollY > 20){
            setTimeout(()=>{
                element.classList.replace("opacity-0","opacity-100");
            },200);
            element.classList.replace("hidden","block");
        }else {
            setTimeout(()=>{
                element.classList.replace("block","hidden");
            },200);
            element.classList.replace("opacity-100","opacity-0")
        }


    });
}