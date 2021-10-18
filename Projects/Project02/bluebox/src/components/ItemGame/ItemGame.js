// This is the component to create a box call to any item on game list from store or library
import React from "react";
import "./ItemGame.css";
import ImageContainer from "../imagecontainer/ImageContainer";
import Label from "../label/Label";
import { Link } from 'react-router-dom';

export default function ItemGame(props){
    // jsx item implementation 
    console.log(props);
    return (
       
        <Link to={"/description/"+props.id} className="link">
            <ImageContainer classname={"item"} classimage={"preview"} image={props.image}>
                <Label classname="description" text={props.gameName+" \n "+props.gameYear} />
            </ImageContainer>
        </Link>
        
    );
}
