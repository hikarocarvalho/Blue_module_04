export const PerfilApi = {
    baseUrl:"http://localhost:3001",

    //end point get
    readAllPerfilUrl: ()=> PerfilApi.baseUrl+"/perfil",
    //end pont create
    createPerfilUrl: ()=> PerfilApi.baseUrl+"/perfil",
    // get method
    buildPerfilApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
    // Post method
    buildPerfilApiPostRequest: (url,body) =>
        fetch(url,{
            method: "POST",
            headers: new Headers({
                "Content-type" : "application/json"
            }),
            body: JSON.stringify(body),
        }),
};