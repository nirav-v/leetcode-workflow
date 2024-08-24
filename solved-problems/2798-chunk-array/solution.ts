type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result = []
 
    let chunk = []

    for (let i = 0; i < arr.length; i++){
        chunk.push(arr[i])
        if (chunk.length === size || i === arr.length -1){
            result.push(chunk)
            chunk = []
        }
    }
    return result
};

