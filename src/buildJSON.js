/**
 * Created by alessandro on 03/09/14.
 */


var response = {};
response.fileList =[];


exports.forgeJson = function(domain,fileList){
    console.log("domain",domain);
    console.log("fileList",fileList);

    var imagePrefix ="/img/";
    var response = {};
    response.fileList = [];
    fileList.forEach(function(fileName){
        response.fileList.push(
            {'name':fileName,'url':'http://'+domain + imagePrefix + fileName }
        )
    });

    return response;
};