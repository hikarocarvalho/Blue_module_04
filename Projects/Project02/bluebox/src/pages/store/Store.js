// this is the page store code and the implamentation of all components from store page
import React,{useState,useEffect} from "react";
import BoxLibrary from "../../components/boxLibrary/BoxLibrary";
import ContentLibrary from "../../components/contentLibrary/Contentlibrary";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
import ContentGenre from "../../components/contentGenre/ContentGenre";
import { GamesApi } from "../../Api/GamesApi";
import "./Store.css";
export default function Store(){
    // Create one variable to implements useState
    const [games,setGames] = useState([]);
    // Create the implementation for useEffect hoock to call the values from web server api
    useEffect(()=>{
        const loadGames = async () =>{
            const response = await GamesApi.buildGamesApiGetRequest(GamesApi.readAllUrl());
            const res = await response.json();
            setGames(res);
        }
        loadGames();
    },[]);
    // Start the implementation of the jsx from store page
    return (
        <section className="box-library">
            <BoxLibrary classname={"favority-library"}>
                <Label text={"User Favority Games"} />
                <ContentLibrary classname={"content"}>
                    {/* start maping the games favirity list */}
                    {games.map((game)=>
                    ((game.score!==0 ? (<Item key={game.id} image={game.folder} gameName={game.title} /> ) : ("")))
                    )}
                </ContentLibrary>
            </BoxLibrary>
            <BoxLibrary classname={"items-library"}>
                <Label text={"User Games Library"} />
                <ContentLibrary classname={"content-ext"}>
                {/* start maping the games genders list */}
                        <ContentGenre classname={"content"} games={games}/>
                </ContentLibrary>
            </BoxLibrary>
        </section>
    );
}