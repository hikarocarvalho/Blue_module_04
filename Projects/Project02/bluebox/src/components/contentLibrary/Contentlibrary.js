import React from "react";
import "./ContentLibrary.css";
export default function ContentLibrary(props){
    return (
        <div className={props.classname}>
            {props.children}
        </div>
    );
}
