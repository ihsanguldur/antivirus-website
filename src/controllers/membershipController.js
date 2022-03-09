
let count = 0;
let visibleCount = 3;

export function nextSlide(){
    const slideItems = document.getElementById("slider").childNodes;
    const itemLengths =  slideItems.length-2;
    count = (count+1) % itemLengths;
    let firstItem =  document.getElementsByClassName("sliderItem-"+(((count) % itemLengths)===0?itemLengths-count:(count) % itemLengths));
    let thirdItem = document.getElementsByClassName("sliderItem-"+(((count +visibleCount) % itemLengths)===0?(itemLengths):(count +visibleCount) % itemLengths));
    firstItem[0].classList.toggle("hidden");
    thirdItem[0].classList.toggle("hidden");
}

export function prevSlide(){
    const slideItems = document.getElementById("slider").childNodes;
    const itemLengths =  slideItems.length-2;
    let firstItem =  document.getElementsByClassName("sliderItem-"+(((count) % itemLengths)===0?itemLengths-count:(count) % itemLengths));
    let thirdItem = document.getElementsByClassName("sliderItem-"+(((count +visibleCount) % itemLengths)===0?(itemLengths):(count +visibleCount) % itemLengths));
    firstItem[0].classList.toggle("hidden");
    thirdItem[0].classList.toggle("hidden");
    count = ((((count - 1) % itemLengths) + itemLengths) % itemLengths); // because it can not bigger than slideItems.length-2 or lesser than 0
}

export function renderMembershipItem(sliderItem, membershipName,price,features,isHidden=false){
    return (
        <div className={sliderItem+ " w-3/4 rounded-b-lg hover:shadow-2xl shadow-xl h-full transition ease-in-out delay-100 duration-200 col-span-3 lg:text-xl md:text-lg sm:text-sm text-xs "+ (isHidden?"hidden":"")}>

            <div className={"rounded-b-lg flex flex-col h-full"}>
                <div className={"bg-orange-500 text-white text-center font-bold lg:text-2xl md:text-xl sm:text-lg xs:text-sm lg:px-16 md:px-12 sm:px-8 px-4 lg:py-14 md:py-10 py-6 rounded-t-lg"}>
                    {membershipName}
                </div>
                <ul className={"list-none text-center flex-1 text-black lg:text-xl md:text-lg sm:text-sm text-xs"}>
                    {features.map((f)=>(
                        <li className={"xl:py-5 lg:py-4 py-3"}>{f}</li>
                    ))}
                </ul>
                <button className={"bg-orange-500 relative bottom-0 text-white py-2 lg:px-16 md:px-12 sm:px-8 px-4 rounded-md mx-auto mb-5 hover:bg-orange-600 transition ease-in-out delay-100 duration-200 hover:shadow-xl"}>
                    {price + " TL"}
                </button>
            </div>
        </div>
    );
}