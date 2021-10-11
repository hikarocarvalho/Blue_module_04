export const GenderApi = {
    baseUrl:"http://localhost:3001",

    //end point
    readAllUrl: ()=> GenderApi.baseUrl+"/gender",
    // get method
    buildGenderApiGetRequest: url =>
        fetch(url,{
            method:"GET",
        }),
};