export const ImageApi = {
    readAllUrl:(url) => url,
    // Get
    buildApiGetRequest:url=>
        fetch(url,{
            method:"GET"
        }),
};