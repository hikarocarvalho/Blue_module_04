export const Api = {
    baseUrl: "https://pokeapi.co/api/v2",
    readAllUrl:() => Api.baseUrl + "/pokemon",
    // Get
    buildApiGetRequest:url=>
        fetch(url,{
            method:"GET"
        }),
};