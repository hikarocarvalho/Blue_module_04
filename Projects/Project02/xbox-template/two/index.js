const profilesItems = [
        document.querySelector('.item-1'),
        document.querySelector('.item-2'),
        document.querySelector('.item-3'),
        document.querySelector('.item-4'),
        document.querySelector('.item-5')
    ];
const transformItem = [
    "translate3d(-100px, 0px, 100px)",
    "translate3d(-50px, 0px, 50px)",
    "translate3d(0px, 0px, 0px)",
    "translate3d(50px, 0px, 50px)",
    "translate3d(100px, 0px, 100px)"
]
const prev = document.querySelector('.controls-prev');
const next = document.querySelector('.controls-next');
const classesList = [
        'profiles-item-1',
        'profiles-item-2',
        'profiles-item-3',
        'profiles-item-4',
        'profiles-item-5'
];
function load(){
    for(let countClassesList = 0; countClassesList < 5; countClassesList++){
        profilesItems[countClassesList].style.transform = transformItem[countClassesList];
    }
}
function rotatePerfil(side){
    const specialItems = {
        firstItem: undefined,
        secondItem:  undefined,
        thirdItem: undefined,
        fourthItem: undefined,
        fifthItem: undefined
    };
    if(side === "next"){
        specialItems.firstItem = (countItem)=>{
            profilesItems[countItem].style.transform = transformItem[4];
            profilesItems[countItem].style.zIndex = 1;
            profilesItems[countItem].style.height = "70%";
            countTransform = 5;
        }
        specialItems.secondItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform-1];
            profilesItems[countItem].style.zIndex = 1;
            profilesItems[countItem].style.height = "70%";
        }
        specialItems.thirdItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform-1];
            profilesItems[countItem].style.zIndex = 2;
            profilesItems[countItem].style.height = "80%";
        }
        specialItems.fourthItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform-1];
            profilesItems[countItem].style.zIndex = 3;
            profilesItems[countItem].style.height = "90%";
        }
        specialItems.fifthItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform-1];
            profilesItems[countItem].style.zIndex = 2;
            profilesItems[countItem].style.height = "80%";
            countTransform = 5;
        }
    }else{
        specialItems.firstItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform+1];
            profilesItems[countItem].style.zIndex = 2;
            profilesItems[countItem].style.height = "80%";
            countTransform = 5;
        }
        specialItems.secondItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform+1];
            profilesItems[countItem].style.zIndex = 3;
            profilesItems[countItem].style.height = "90%";
        }
        specialItems.thirdItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform+1];
            profilesItems[countItem].style.zIndex = 2;
            profilesItems[countItem].style.height = "80%";
        }
        specialItems.fourthItem = (countItem,countTransform)=>{
            profilesItems[countItem].style.transform = transformItem[countTransform+1];
            profilesItems[countItem].style.zIndex = 1;
            profilesItems[countItem].style.height = "70%";
        }
        specialItems.fifthItem = (countItem)=>{
            profilesItems[countItem].style.transform = transformItem[0];
            profilesItems[countItem].style.zIndex = 1;
            profilesItems[countItem].style.height = "70%";
            countTransform = 5;
        }
    }
    for(let countItem = 0; countItem < 5; countItem++){       
        for(let countTransform = 0; countTransform < 5; countTransform++){
            if(profilesItems[countItem].style.transform === transformItem[countTransform]){
                if(countTransform === 0){
                    specialItems.firstItem(countItem,countTransform);
                }else if(countTransform === 1){
                    specialItems.secondItem(countItem,countTransform);
                    countTransform = 5;
                }else if(countTransform === 2){
                    specialItems.thirdItem(countItem,countTransform);
                    countTransform = 5;
                }else if(countTransform === 3){
                    specialItems.fourthItem(countItem,countTransform);
                    countTransform = 5;
                }else if(countTransform === 4){
                    specialItems.fifthItem(countItem,countTransform);
                }
            }
        }
    }
}
function prevPerfil(){
        rotatePerfil("prev");
}
function nextPerfil(){
        rotatePerfil("next");
}