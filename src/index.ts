import u_color from "./color";
import u_conditionable from "./conditionable";
import u_num from "./num";
import u_set from "./set";
import u_str from "./str";
import u_tof from "./tof";

const tilde = (function () {
  const funcExports = {
    tof: u_tof,
    number: u_num,
    color: u_color,
    conditionable: u_conditionable,
    set: u_set,
    str: u_str,
  };

  return funcExports;
})();

export default tilde;
