import React from "react";
import BoxItems from "../../components/boxItems/BoxItems";
import BoxLibrary from "../../components/boxLibrary/BoxLibrary";
import ContentLibrary from "../../components/contentLibrary/Contentlibrary";
import Item from "../../components/Item/Item";
import Label from "../../components/label/Label";
import "./Library.css";
import Gog from "./gog.png";
export default function Library(){
    return (
        <section class="box-library">
            <BoxLibrary classname={"favority-library"}>
                <Label text={"User Favority Games"} />
                <ContentLibrary classname={"content"}>
                    <Item image={Gog} />
                    <Item image={Gog} />
                    <Item image={Gog} />
                    <Item image={Gog} />
                </ContentLibrary>
            </BoxLibrary>
            <BoxLibrary classname={"items-library"}>
                <Label text={"User Games Library"} />
                <ContentLibrary classname={"content-ext"}>
                    <ContentLibrary classname={"content"}>
                        <Label classname={"genre"} text={"Genre"} />
                        <BoxItems classname="items">
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                        </BoxItems>
                    </ContentLibrary>
                    <ContentLibrary classname={"content"}>
                        <Label classname={"genre"} text={"Genre"} />
                        <BoxItems classname="items">
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                            <Item image={Gog}>
                            </Item>
                        </BoxItems>
                    </ContentLibrary>
                    <ContentLibrary classname={"content"}>
                    <Label classname={"genre"} text={"Genre"} />
                    <BoxItems classname="items">
                        <Item image={Gog}>
                        </Item>
                        <Item image={Gog}>
                        </Item>
                        <Item image={Gog}>
                        </Item>
                        <Item image={Gog}>
                        </Item>
                    </BoxItems>
                </ContentLibrary>
                </ContentLibrary>
            </BoxLibrary>
        </section>
    );
}