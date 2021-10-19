// this code represent the perfil chose list page
import React,{useState,useEffect} from "react";
import "./Perfil.css";
export default function Perfil(){
    
    const items = { 
        profilesItems : [
            document.querySelector('.item-1'),
            document.querySelector('.item-2'),
            document.querySelector('.item-3'),
            document.querySelector('.item-4'),
            document.querySelector('.item-5')
    ],
        transformItem :[
            "translate3d(-100px, 0px, 100px)",
            "translate3d(-50px, 0px, 50px)",
            "translate3d(0px, 0px, 0px)",
            "translate3d(50px, 0px, 50px)",
            "translate3d(100px, 0px, 100px)"
    ],
    // styles :{
    //     item1:{
    //         "z-index": "1",
    //         transform:"translate3d(-100px, 0px, 100px)",
    //         position: "absolute",
    //         height: "70%",
    //       },
    //     item2:{
            
    //     }
    // }
};
    const [slide, setslide] = useState(items);
    console.log(slide);
    let recharge = true;
    const prevPerfil=()=>{
        for(let countItem = 0; countItem < 5; countItem++){       
            for(let countTransform = 0; countTransform < 5; countTransform++){
                    if(slide.profilesItems[countItem].style.transform === slide.transformItem[countTransform]){
                        if(countTransform === 0){
                            slide.profilesItems[countItem].style.transform = slide.transformItem[countTransform+1];
                            slide.profilesItems[countItem].style.zIndex = 2;
                            slide.profilesItems[countItem].style.height = "80%";
                            countTransform = 5;
                        }else if(countTransform === 1){
                            slide.profilesItems[countItem].style.transform = slide.transformItem[countTransform+1];
                            slide.profilesItems[countItem].style.zIndex = 3;
                            slide.profilesItems[countItem].style.height = "90%";
                            countTransform = 5;
                        }else if(countTransform === 2){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform+1];
                            slide.profilesItems[countItem].style.zIndex = 2;
                            slide.profilesItems[countItem].style.height = "80%";
                            countTransform = 5;
                        }else if(countTransform === 3){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform+1];
                            slide.profilesItems[countItem].style.zIndex = 1;
                            slide.profilesItems[countItem].style.height = "70%";
                            countTransform = 5;
                        }else if(countTransform === 4){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[0];
                            slide.profilesItems[countItem].style.zIndex = 1;
                            slide.profilesItems[countItem].style.height = "70%";
                            countTransform = 5;
                        }
                    }
            }
        }
    }
    const nextPerfil=()=>{
        for(let countItem = 0; countItem < 5; countItem++){    
            for(let countTransform = 0; countTransform < 5; countTransform++){
                    if( slide.profilesItems[countItem].style.transform ===  slide.transformItem[countTransform]){
                        if(countTransform === 0){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[4];
                            slide.profilesItems[countItem].style.zIndex = 1;
                            slide.profilesItems[countItem].style.height = "70%";
                            countTransform = 5;
                        }else if(countTransform === 1){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform-1];
                            slide.profilesItems[countItem].style.zIndex = 1;
                            slide.profilesItems[countItem].style.height = "70%";
                            countTransform = 5;
                        }else if(countTransform === 2){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform-1];
                            slide.profilesItems[countItem].style.zIndex = 2;
                            slide.profilesItems[countItem].style.height = "80%";
                            countTransform = 5;
                        }else if(countTransform === 3){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform-1];
                            slide.profilesItems[countItem].style.zIndex = 3;
                            slide.profilesItems[countItem].style.height = "90%";
                            countTransform = 5;
                        }else if(countTransform === 4){
                            slide.profilesItems[countItem].style.transform =  slide.transformItem[countTransform-1];
                            slide.profilesItems[countItem].style.zIndex = 2;
                            slide.profilesItems[countItem].style.height = "80%";
                            countTransform = 5;
                        }
                    }
            }
        }
    }
    return (
        <div className="profiles">
        <div className="profiles-container">
            <div className="profiles-item-1 item-1" >
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
            </div>
            <div className="profiles-item-2 item-2" >
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
            </div>
            <div className="profiles-item-3 item-3" >
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
            </div>
            <div className="profiles-item-4 item-4" >
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
            </div>
            <div className="profiles-item-5 item-5" >
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
            </div>
        </div>
        <div className="profiles-controls">
            <button id="controls-prev" onClick={nextPerfil}>{"<"}</button>
            <button id="controls-next" onClick={prevPerfil}>{">"}</button>
        </div>
      </div>
    );
}