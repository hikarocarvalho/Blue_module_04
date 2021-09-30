import React from "react";
import "./Pokedex.css";
import Controlls from "../controlls/Controlls";
import ListItems from "../listItems/ListItems";
export default function Pokedex(){
    return (
        <section id="spinner" className="pokedex">
            <div className="layer0 layer">
                <Controlls>

                </Controlls>
                
                <ListItems>

                </ListItems>
                <article className="right">
                    <div className="round-button-armature">
                        <div className="round-button">

                        </div>
                    </div>
                </article>
            </div>
            <div className="layer5 layer">
                <article className="left">
                   
                </article>
                <article className="center">
                   
                </article>
                <article className="right">
                    
                </article>
            </div>
              
        </section>
    );
}
