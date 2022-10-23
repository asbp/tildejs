const tof = (() => {
    const falsy = (value: any) => (!value || Number.isNaN(value));
    const truthy = (value: any) => !falsy(value);
    
    const falsyExcept = (value: any, condition: Function) => falsy(value) && !condition(value)
    const truthyExcept = (value: any, condition: Function) => !falsyExcept(value, condition);
    
    const falsyExceptEmptyStr = (value: any) => falsyExcept(value, (value: any) => value === "");
    const truthyExceptEmptyStr = (value: any) => !falsyExceptEmptyStr(value);
    
    const falsyExceptZero = (value: any) => falsyExcept(value, (value: any) => value === 0);
    const truthyExceptZero = (value: any) => !falsyExceptZero(value);

    const functions = {
        falsy,
        truthy,
        falsyExcept,
        truthyExcept,
        falsyExceptEmptyStr,
        truthyExceptEmptyStr,
        truthyExceptZero,
        falsyExceptZero
    }

    return functions;
})();

export default tof