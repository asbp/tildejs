import { ReturnableCallback } from "./_types";

const u_tof = (() => {
  /**
   * Check whether the value is falsy.
   *
   * @param value
   * @returns {boolean}
   */
  const falsy = (value: any): boolean => !value || Number.isNaN(value);

  /**
   * Check whether the value is truthy.
   *
   * @param value
   * @returns {boolean}
   */
  const truthy = (value: any): boolean => !falsy(value);

  /**
   * Check whether the value is falsy except certain values as conditioned in the callback.
   *
   * @param value
   * @param {ReturnableCallback} condition
   * @returns {boolean}
   */
  const falsyExcept = (
    value: any,
    condition: ReturnableCallback<any, boolean>
  ): boolean => falsy(value) && !condition(value);

  /**
   * Check whether the value is truthy except certain values as conditioned in the callback.
   *
   * @param value
   * @param {ReturnableCallback} condition
   * @returns {boolean}
   */
  const truthyExcept = (
    value: any,
    condition: ReturnableCallback<any, boolean>
  ): boolean => !falsyExcept(value, condition);

  /**
   * Check whether the value is falsy except an empty string.
   *
   * @param value
   * @returns {boolean}
   */
  const falsyExceptEmptyStr = (value: any): boolean =>
    falsyExcept(value, (value: any) => value === "");

  /**
   * Check whether the value is truthy except an empty string.
   *
   * @param value
   * @returns {boolean}
   */
  const truthyExceptEmptyStr = (value: any): boolean =>
    !falsyExceptEmptyStr(value);

  /**
   * Check whether the value is falsy except a zero.
   *
   * @param value
   * @returns {boolean}
   */
  const falsyExceptZero = (value: any): boolean =>
    falsyExcept(value, (value: any) => value === 0);

  /**
   * Check whether the value is truthy except an empty string.
   *
   * @param value
   * @returns {boolean}
   */
  const truthyExceptZero = (value: any): boolean => !falsyExceptZero(value);

  const functions = {
    falsy,
    truthy,
    falsyExcept,
    truthyExcept,
    falsyExceptEmptyStr,
    truthyExceptEmptyStr,
    truthyExceptZero,
    falsyExceptZero,
  };

  return functions;
})();

export default u_tof;
