const u_set = (() => {
    const makeSet = (contents: any[]) => new Set(contents);
    const makeUniqueFromArray = (arr: any[]) => [...makeSet(arr)];

    const exported = {
        makeSet,
        makeUniqueFromArray
    };

    return exported;
})();

export default u_set;