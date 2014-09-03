/**
 * Created by alessandro on 02/09/14.
 */
var readPhotosFolder = require('../src/fsUtils').readPhotosFolder;

describe("readPhotosName", function () {
    it('should fail because dir is undefined', function () {

        var response = null;
        var expected = ['img.png'];
        var callback = function(){
            response = true;
        };
        readPhotosFolder().fail(callback);

        waitsFor(function() {
            return response === true;
        }, "The timed out.", 500);

        runs(function() {
            expect(response ).toBe(true);

        });

    });

    it('should call callback after read folder', function () {
        var response = false;
        var expected = ['img.png'];
        var callback = function(fileList){
            response = fileList;
        };
        var dirPath = __dirname+'/img';
        readPhotosFolder(dirPath).success(callback);

        waitsFor(function() {
            return Array.isArray(response);
        }, "The timed out.", 500);

        runs(function() {
            expect(JSON.stringify(response)).toBe(JSON.stringify(expected));
            expect(response.length).toBe(1);
        });


    });




});

