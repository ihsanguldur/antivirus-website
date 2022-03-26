import React from "react";

export function renderAccordion(i, question, answer) {
    return (
        <div key={i} className={"mb-2 shadow-xl"}>
            <div
                onClick={() => {
                    document.getElementById("body-" + i).classList.toggle("hidden");
                }}
                className={"flex-1 lg:text-xl md:text-lg sm:text-base text-sm py-3 text-center border border-orange-500 bg-orange-500 text-white font-bold cursor-pointer rounded-lg"}>
                {question}
                <span
                    className={"float-right pr-5"}>
                                <svg

                                    xmlns="http://www.w3.org/2000/svg"
                                    className="lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"/>
                                </svg>
                            </span>
            </div>
            <div
                id={"body-" + i}
                className={"lg:text-lg md:text-base sm:text-sm text-xs font-normal border-b border-x text-center border-orange-500 py-4 hidden"}>
                {answer}
            </div>
        </div>
    );
}