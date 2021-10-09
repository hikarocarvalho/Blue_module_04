import React from "react";
import "./ContentGenre.css";
import BoxItems from "../../components/boxItems/BoxItems";
import Gog from "./gog.png";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
export default function ContentGenre(props){
    return (
        <div className={props.classname}>
            <Label classname={"genre"} text={"Genre"} />
            <BoxItems classname="items">
                <Item image={Gog} />
                <Item image={Gog} />
                <Item image={Gog} />
                <Item image={Gog} />
            </BoxItems>
        </div>
    );
}
