export function showAccordionBody(index){
    const body = document.getElementById("body-"+index);
    body.classList.toggle("hidden");
}