import React from "react";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import "./Description.css";
import Gog from "./gog.png";
export default function Description(){
    return (
        <section className="description-box">
            <ImageContainer classname={"description-item"} image={Gog} description={""} classimage={"preview"}>

            </ImageContainer>
            
            <div class="description-text">
                <p>gog</p>
                <p>(genre)</p>
                <p>In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. As the story progresses, Kratos is revealed to be Ares’ former servant, who had been tricked into killing his own family and is haunted by terrible nightmares. Armed with the Blades of Chaos, a weapon made out of two daggers attached to chains, Kratos rumbles through ancient Athens and other locations on a murderous quest to terminate the rogue god. Action in God of War is viewed from the third person, and advanced movements such as running, jumping, climbing, and swimming are similar to those in the Tomb Raider series, another adventure-game series with strong platform-game characteristics. Some of Kratos’s foes can be killed only by combinations of magic and physical attacks, making combat more reliant on skill. Greek mythology powers the story, so players encounter a myriad of Minotaurs and Hydras.

                   </p>
            </div>
        </section>
    );
}