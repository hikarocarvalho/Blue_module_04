export const UerApi = {
    baseUrl:"http://localhost:3001",

    // end point get
    readAllUsersUrl: ()=> UserApi.baseUrl+"/users",
    // end point create
    createUserUrl: ()=> UserApi.baseUrl+"/users",
    // get method
    buildUserApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
    // post method
    buildUserApiPostRequest: (url,body) =>
        fetch(url,{
            method:"POST",
            headers:new Headers({
                "Content-type" : "application/json"
            }),
            body: JSON.stringify(body),
        }),
};