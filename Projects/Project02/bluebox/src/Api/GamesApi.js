export const GamesApi = {
    baseUrl:"http://localhost:3001",

    //end point
    readAllUrl: ()=> GamesApi.baseUrl+"/games",
    // get method
    buildGamesApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
};