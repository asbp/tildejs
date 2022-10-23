import u_tof from "./tof";
import { ReturnableCallback } from "./_types";

const u_conditionable = (() => {
  const when = (
    condition: boolean,
    callback: ReturnableCallback,
    fallback?: ReturnableCallback
  ) => {
    if (u_tof.truthy(condition)) {
      return callback(condition);
    } else {
      if (u_tof.truthy(fallback)) {
        return fallback?.(condition);
      }

      return undefined;
    }
  };

  const unless = (
    condition: boolean,
    callback: ReturnableCallback,
    fallback?: ReturnableCallback
  ) => {
    if (u_tof.falsy(condition)) {
      return callback(condition);
    } else {
      if (u_tof.truthy(fallback)) {
        return fallback?.(condition);
      }

      return undefined;
    }
  };

  const exported = {
    when,
    unless,
  };

  return exported;
})();

export default u_conditionable;
