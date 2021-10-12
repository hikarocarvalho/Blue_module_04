//This component create a image component and add one defalt image for an not image case
import React from "react";
import "./ImageContainer.css";
import NotImage from "./imagenot.png";
export default function ImageContainer(props){
    return (
        <picture className={props.classname} >
            <source srcSet={props.image}></source>
            <img src={NotImage} alt={props.description} className={props.classimage} />
            {props.children}
        </picture>
    );
}