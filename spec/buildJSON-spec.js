/**
 * Created by alessandro on 03/09/14.
 */

var buildJSON = require('../src/buildJSON');

describe("buildJSONTest", function () {

    it('should return an ArrayList', function () {
        var domain = "localhost:3000";
        var imagePrefix ="/img/";
        var expected = JSON.stringify({
            fileList :[
                {'name':'img.png','url':'http://'+domain + imagePrefix + "img.png" }

            ]
        });
        expect(JSON.stringify( buildJSON.forgeJson(domain,['img.png']) )).toBe(expected);
    });




});

