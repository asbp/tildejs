import u_color from "./color";
import u_conditionable from "./conditionable";
import u_num from "./num";
import u_tof from "./tof";

const tilde = (function () {
  const funcExports = {
    tof: u_tof,
    number: u_num,
    color: u_color,
    conditionable: u_conditionable,
  };

  return funcExports;
})();

export default tilde;
