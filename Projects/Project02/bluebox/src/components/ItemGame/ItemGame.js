// This is the component to create a box call to any item on game list from store or library
import React from "react";
import "./ItemGame.css";
import ImageContainer from "../imagecontainer/ImageContainer";
import Label from "../label/Label";
export default function ItemGame(props){
    // jsx item implementation 
    console.log(props);
    return (
        <ImageContainer classname={"item"} classimage={"preview"} image={props.image}>
            <Label classname="description" text={props.gameName+" \n "+props.gameYear} />
        </ImageContainer>
    );
}
