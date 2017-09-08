/**
 * Created by ryanrodwell on 9/8/17.
 */
/**
 * Created by ryanrodwell on 9/8/17.
 */
var webshot = require("webshot");

var options = {
    siteType: "file",
    streamType: "png",
    shotSize: {
        width: "all",
        height: "all"
    },
    defaultWhiteBackground: true

};

webshot("helloworld.html", "helloworld.png", options, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Successfully created Image");

});