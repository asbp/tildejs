import u_tof from "./tof";
import { ReturnableCallback } from "./_types";

const u_conditionable = (() => {
  const when = <T = any, U = any>(
    condition: T,
    callback: ReturnableCallback<T, U>,
    fallback: ReturnableCallback<T, U>
  ) => {
    if (u_tof.truthy(condition)) {
      return callback(condition);
    } else {
      return fallback(condition);
    }
  };

  const unless = <T = any, U = any>(
    condition: T,
    callback: ReturnableCallback<T, U>,
    fallback: ReturnableCallback<T, U>
  ) => {
    if (u_tof.falsy(condition)) {
      return callback(condition);
    } else {
      return fallback(condition);
    }
  };

  const exported = {
    when,
    unless,
  };

  return exported;
})();

export default u_conditionable;
