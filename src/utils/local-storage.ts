import { get, set } from 'lodash';

export const getDataFromLocalStorage = (path?: string) => {
    const localData: string | null = window.localStorage.getItem('state');
    const parsedData: object = localData && JSON.parse(localData);

    return path ? get(parsedData, path, null) : parsedData;
}

export const saveDataToLocalStorage = (path: string, data: any) => {
    const fullCache = getDataFromLocalStorage();
    const newCache = fullCache || {};
    set(newCache, path, data);
    var _lsTotal = 0, _xLen, _x; for (_x in localStorage) { if (!localStorage.hasOwnProperty(_x)) { continue; } _xLen = ((localStorage[_x].length + _x.length) * 2); _lsTotal += _xLen; console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB") }; console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

    window.localStorage.setItem('state', JSON.stringify(newCache));
}
