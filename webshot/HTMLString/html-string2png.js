/**
 * Created by ryanrodwell on 9/8/17.
 */
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
        height: "all"
    }

};

webshot(htmlString, "GTvsTN.png", options, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Successfully created Image");

});