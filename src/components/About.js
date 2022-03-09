import React, {Component} from "react";
import img from "../resource/images/foximg.png";
export default class About extends Component{

    render() {
        return (
            <div className={"container mx-auto grid grid-cols-2"}>
                <div className={"my-32"}>
                    <img
                        src={img}
                        alt={"foximg"}/>
                </div>
                <div className={"text-center self-center font-medium lg:text-xl md:text-lg sm:text-sm text-xs pr-14"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sit amet ullamcorper ante. Morbi tempor eget felis eget sagittis.
                        Phasellus vitae ex mauris. Fusce odio est, rutrum eget maximus in, vulputate nec ex.
                        Ut quis urna consectetur, ultricies lacus vitae, facilisis sem. Sed mattis fermentum mattis.
                        Duis lacus risus, accumsan at magna at, hendrerit mattis lacus.
                    </p>
                </div>
            </div>
        );
    }

}