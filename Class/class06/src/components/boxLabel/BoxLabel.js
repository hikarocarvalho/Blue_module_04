import React from "react";
import "./BoxLabel.css";
import "./../pokedex/Pokedex.css";
export default function BoxLabel ({children}){
    return(
        <div id="stage" className="stage">
            <section id="spinner" className="box">
                <article className="sub-box">
                    {children}
                </article>
            </section>
        </div>
            
    );
}