import React,{useState,useEffect} from "react";
import { Api } from '../../api/Api';
import "./ListItems.css";
import Item from './../item/Item';
export default function ListItems (){
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        const loadData = async () =>{
            const response = await Api.buildApiGetRequest(Api.readAllUrl());
            const res = await response.json();
            const results = res.results;
            setPokemons(results);
        }
        loadData();
    },[])

    return(
        <article className="center">
                    <div className="display-armature">
                        <div className="display">
                        {pokemons.map ((pokemon,index)=>(
                            <Item pokemon={pokemon}></Item>
                        ))}
                        </div>
                    </div>
        </article>
            
    );
}