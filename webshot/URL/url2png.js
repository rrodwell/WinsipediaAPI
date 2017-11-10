/**
 * Created by ryanrodwell on 9/8/17.
 */
var webshot = require("webshot");

var options = {
    streamType: "png",
    windowSize: {
        width: 1024,
        height: 786
    },
    shotSize: {
        width: "all",
        height: "1300"
    }

};

webshot("http://www.winsipedia.com/georgia-tech/vs/tennessee", "GTvsTN2.png", options, (err) => {
    if (err) {
       return console.log(err);
    }

    console.log("Successfully created Image");

});