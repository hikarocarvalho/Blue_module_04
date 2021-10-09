import React from "react";
import BoxLibrary from "../../components/boxLibrary/BoxLibrary";
import ContentLibrary from "../../components/contentLibrary/Contentlibrary";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
import "./Store.css";
import Gog from "./gog.png";
import ContentGenre from "../../components/contentGenre/ContentGenre";
export default function Store(){
    return (
        <section class="box-library">
            <BoxLibrary classname={"favority-library"}>
                <Label text={"User Favority Games"} />
                <ContentLibrary classname={"content"}>
                    <Item image={Gog} />
                </ContentLibrary>
            </BoxLibrary>
            <BoxLibrary classname={"items-library"}>
                <Label text={"User Games Library"} />
                <ContentLibrary classname={"content-ext"}>
                    <ContentGenre classname={"content"} />
                </ContentLibrary>
            </BoxLibrary>
        </section>
    );
}