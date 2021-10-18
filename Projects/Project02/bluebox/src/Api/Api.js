export const Api = {
    baseUrl:"http://localhost:3001",
    //end points users
    readAllUsersUrl: ()=> Api.baseUrl+"/users",
    createUserUrl: ()=> Api.baseUrl+"/users",

    //end points perfil
    readAllPerfilUrl: ()=> Api.baseUrl+"/perfil",
    createPerfilUrl: ()=> Api.baseUrl+"/perfil",

    //end points Gener
    readAllGenreUrl: ()=> Api.baseUrl+"/genre",
    createGenreUrl: ()=> Api.baseUrl+"/genre",

    //end points Games
    readAllGamesUrl: ()=> Api.baseUrl+"/games",
    readOneGameUrl: (id)=> Api.baseUrl+"/games/"+id,
    createGameUrl:()=> Api.baseUrl+"/games",
    
    //end points Games user list
    readAllGamesListUrl: (id)=> Api.baseUrl+"/list-of-games/"+id,
    // get method
    buildApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
    // Post method
    buildApiPostRequest: (url,body) =>
        fetch(url,{
            method: "POST",
            headers: new Headers({
                "Content-type" : "application/json"
            }),
            body: JSON.stringify(body),
        }),
};