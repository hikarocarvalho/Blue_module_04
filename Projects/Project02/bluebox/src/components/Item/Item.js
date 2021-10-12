// This is the component to create a box call to any item on game list from store or library
import React from "react";
import "./Item.css";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Label from "../../components/label/Label";
export default function Item(props){
    // jsx item implementation 
    return (
        <ImageContainer classname={"item"} classimage={"preview"} image={props.image}>
            <Label classname="description" text={props.gameName} />
        </ImageContainer>
    );
}
