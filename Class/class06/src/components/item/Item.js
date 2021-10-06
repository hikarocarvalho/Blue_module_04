import React,{ useState} from "react";
import { ImageApi } from "../../api/ImageApi";
import "./Item.css";
export default function Item(props){
    const [image,setImage] = useState()
    const images=(url)=>{
        const loadData = async () =>{
            const response = await ImageApi.buildApiGetRequest(ImageApi.readAllUrl(url));
            const res = await response.json();
            const results = res.sprites.back_default;
            console.log(results);   
            setImage(results);
        }
        loadData();
    }
    return(
        <div className="item">
            <label>
            {props.pokemon.name}
            </label>
            {images(props.pokemon.url)}
            <img alt="pokemon" src={image}></img>
        </div>
    );
}