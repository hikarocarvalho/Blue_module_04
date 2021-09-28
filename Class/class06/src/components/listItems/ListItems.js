import React,{useState,useEffect} from "react";
import { Api } from '../../api/Api';
export const ListItems = () => {
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
        <div>
            {pokemons.map ((pokemon,index)=>(
                <div>{pokemon.name}</div>
            ))}
        </div>
    );
}