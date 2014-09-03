/**
 * Created by alessandro on 02/09/14.
 */
var fsUtils = require('../src/fsUtils');

describe("readPhotosName", function () {
    it('should throw exception because dir is undefined', function () {
        expect( function(){
            fsUtils.readPhotosName()
        }).toThrow(new Error("you must specify a directory to scan."));
    });

    it('should call callback after read folder', function () {
        var response = false;
        var expected = ['img.png'];
        var callback = function(fileList){
            response = fileList;
        };
        fsUtils.readPhotosName('./spec/img').success(callback);

        waitsFor(function() {
            return Array.isArray(response);
        }, "The timed out.", 500);

        runs(function() {
            expect(JSON.stringify(response)).toBe(JSON.stringify(expected));
            expect(response.length).toBe(1);
        });


    });




});

