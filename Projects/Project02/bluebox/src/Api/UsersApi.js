export const UerApi = {
    baseUrl:"http://localhost:3001",

    //end point
    readAllUrl: ()=> UserApi.baseUrl+"/users",
    // get method
    buildUserApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
};