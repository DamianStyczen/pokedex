import { get } from 'lodash';

export const getDataFromLocalStorage = (path: string) => {
    const localData: string | null = window.localStorage.getItem('state');
    const parsedData: object = localData && JSON.parse(localData);

    return get(parsedData, path, null);
}

export const saveDataToLocalStorage = (path: string, data: any) => {
    // TODO - Do not override previous data
    // const cachedData = getDataFromLocalStorage(path);

    const newData = {
        pokemon: {
            list: data
        }
    }

    window.localStorage.setItem('state', JSON.stringify(newData));
}
