export const GenerApi = {
    baseUrl:"http://localhost:3001",

    //end point get
    readAllUrl: ()=> GenerApi.baseUrl+"/gender",
    //end point create
    createGener: ()=> GenerApi.baseUrl+"/gender",
    // get method
    buildGenerApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
    // post method
    buildGenerApiPostRequest: (url,body) =>
        fetch(url,{
            method:"POST",
            headers: new Header({
                "Content-type" : "application/json",
            }),
            body: JSON.stringify(body),
        }),
};