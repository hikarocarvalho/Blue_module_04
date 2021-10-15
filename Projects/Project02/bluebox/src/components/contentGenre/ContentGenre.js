// This component Genre create a box for genre by genre of games
import React from "react";
import "./ContentGenre.css";
import BoxItems from "../../components/boxItems/BoxItems";
import Label from "../../components/label/Label";
import ItemGame from "../ItemGame/ItemGame";
export default function ContentGenre(props){
    //start of jsx Content genre implementation 
    const verifyGenre = (game) =>{
        
        game.genre.map((genres)=>{
            if (genres.genre.name === props.genre){
                console.log("deu true")
                return true;
            }else{
                return false;
            }
        });
    };
    return (
        <div className={props.classname}>
            <Label classname={"genre"} text={props.genre} />
            <BoxItems classname="items">
                {props.games.map((game)=>(verifyGenre?( <ItemGame key={game.id} image={game.folder} gameName={game.title} gameYear={game.year} gameScore={game.score} />):undefined))}
            </BoxItems>
        </div>
    );
}
