// This component Genre create a box for genre by genre of games
import React from "react";
import "./ContentGenre.css";
import BoxItems from "../../components/boxItems/BoxItems";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
export default function ContentGenre(props){
    //start of jsx Content genre implementation 
    const verifyGender = (game) =>{
        game.gender.map((genre)=>{
            if (genre.name === props.genre){
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
                {props.games.map((game)=>{
                    if(verifyGender(game)){
                        return(
                            <Item key={game.id} image={game.folder} gameName={game.title} />
                        );
                    }else{
                        return ("");
                    }
                }
                )}
            </BoxItems>
        </div>
    );
}
