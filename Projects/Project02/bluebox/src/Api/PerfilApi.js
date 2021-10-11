export const PerfilApi = {
    baseUrl:"http://localhost:3001",

    //end point
    readAllUrl: ()=> PerfilApi.baseUrl+"/perfil",
    // get method
    buildPerfilApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
};