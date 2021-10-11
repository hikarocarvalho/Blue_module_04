import React from "react";
import "./ContentGenre.css";
import BoxItems from "../../components/boxItems/BoxItems";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
export default function ContentGenre(props){
    return (
        <div className={props.classname}>
            <Label classname={"genre"} text={"Genre"} />
            <BoxItems classname="items">
                {props.games.map((game)=>(
                    <Item key={game.id} image={game.folder} />
                ))}
            </BoxItems>
        </div>
    );
}
