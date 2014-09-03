/**
 * Created by alessandro on 02/09/14.
 */


var fs = require('fs');
var EventEmitter = require('events').EventEmitter;


var allowedExt = ["png","jpg","jpeg"];

exports.readPhotosName = function (dir,callback) {
    var e = new EventEmitter();

    if(dir === undefined || dir === null || dir === ""){
        throw new Error("you must specify a directory to scan.");
    }
        fs.readdir(dir, function (err, fileList) {
            if (err) {
                e.emit('fail',err);
                return;
            }
            fileList = filterImageFile(fileList);
            e.emit('success',fileList);
        });

    var self = {};
    self.success = function(f) {
        e.on('success',f);
        return self;
    };
    self.fail = function(f) {
        e.on('fail',f);
        return self;
    };
    return self;
};

function filterImageFile(fileList){
    var response = [];
    fileList.forEach(function(fileName) {

        if(fileName.charAt(0) === '.') {
            return;
        }

        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        if (allowedExt.indexOf(ext) >= 0) {
            response.push(fileName);
        }

    });
    return response;
}