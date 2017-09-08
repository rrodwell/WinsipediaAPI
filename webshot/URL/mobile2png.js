/**
 * Created by ryanrodwell on 9/8/17.
 */
var webshot = require('webshot');

var options = {
    screenSize: {
        width: 320,
        height: 480
    },
    shotSize: {
        width: 320,
        height: 500
    },
    shotOffset: {
        top: "330"
    },
    userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
    quality: 100,
    defaultWhiteBackground: true
};

webshot("http://www.winsipedia.com/georgia-tech/vs/tennessee", "GTvsTN-mobile.png", options, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Successfully created Image");

});