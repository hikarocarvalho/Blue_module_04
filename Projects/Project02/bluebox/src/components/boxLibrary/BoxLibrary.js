import React from "react";
import "./BoxLibrary.css";
export default function BoxLibrary(props){
    return (
        <article className={props.classname}>
            {props.children}
        </article>
    );
}
