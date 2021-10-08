import React from "react";
import "./Label.css";
export default function Label(props){
    return (
        <label className={props.classname}>
            {props.text}
        </label>
    );
}
