import React from "react";
import "./Pokedex.css";
import Controlls from "../controlls/Controlls";
import ListItems from "../listItems/ListItems";
export default function Pokedex(){
    return (
        <section id="spinner" className="pokedex">
            <div className="layer">
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
 
              
        </section>
    );
}
