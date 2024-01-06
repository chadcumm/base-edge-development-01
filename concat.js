const fs = require("fs-extra");
const concat = require("concat");

(async function() {
    const files = [
        "../c0665/base-edge-development-01/runtime.js",
        "../c0665/base-edge-development-01/main.js",
        "../c0665/base-edge-development-01/polyfills.js"
    ];
    await concat(files, "../c0665/base-edge-development-01/base-edge-development-01.js");

})();