import React from "react";
import "./Item.css";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Label from "../../components/label/Label";
export default function Item(props){
    return (
        <ImageContainer classname={"item"} classimage={"preview"} image={props.image}>
            <Label classname="description" text={"game name"} />
        </ImageContainer>
    );
}
