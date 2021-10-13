export const GamesApi = {
    baseUrl:"http://localhost:3001",

    //end point get 
    readAllGamesUrl: ()=> GamesApi.baseUrl+"/games",
    //end point create
    createGameUrl:()=> GamesApi.baseUrl+"/games",
    // get method
    buildGamesApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
    // post method
    buildGamesApiPostRequest: (url,body) =>
        fetch(url,{
            method: "POST",
            Headers: new Header({
                "Content-type" : "application/json",
            }),
            body: JSON.stringify(body),
        }),
};