import u_tof from "./tof";

const u_conditionable = (() => {
    const when = (condition: boolean, callback: Function, fallback?: Function) => {
        if (u_tof.truthy(condition)) {
            return callback(condition);
        } else {
            if (fallback instanceof Function) {
                return fallback(condition);
            }

            return undefined;
        }
    };

    const unless = (condition: boolean, callback: Function, fallback?: Function) => {
        if (u_tof.falsy(condition)) {
            return callback(condition);
        } else {
            if (fallback instanceof Function) {
                return fallback(condition);
            }

            return undefined;
        }
    };

    const exported = {
        when, unless
    };

    return exported;
})();

export default u_conditionable;