type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {

            const result = [];
            let resolvedCount = 0;
            return new Promise((resolve, reject)=> {
                for (let i = 0; i < functions.length; i++){      
                  functions[i]() // returns a promise whose resolved value can be accessed in .then()
                  .then((value)=> {     
                    result[i] = value
                    resolvedCount++;
                    if (resolvedCount === functions.length) resolve(result);
                  })
                  .catch(err => reject(err))
                }
            })

}



