type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
	


    // if obj is array, obj = obj.filter(i => i)
    if (Array.isArray(obj)) obj = obj.filter(item => item);
    
    //  go through the object keys, 
    let keys = Object.keys(obj);

    for (const key of keys){
        // if falsy 
            // delete obj[key]
        if (!obj[key]) {
            delete obj[key]
        };

        if (typeof obj[key] === "object"){
            obj[key] = compactObject(obj[key]);
        }

    }

    return obj;
};
