var webDevConfig = require("./webpack.config");
var WebPackStrip = require("./strip-loader");

var striploader = {
    test : [/\.ts$/,/\.tsx$/,/\.js$/],
    exclude :"/node_modules",
    loader : WebPackStrip.loader("console.log")
};



webDevConfig.module.loaders.push("strip-loader");



module.exports = webDevConfig;