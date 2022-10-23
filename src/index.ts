import tof from "./tof";

const tilde = (function () {
    var pjson = require('./package.json');

    let version = pjson.version;

    const funcExports = {
        version,
        ...tof
    }

    return funcExports;
})();

export default tilde;