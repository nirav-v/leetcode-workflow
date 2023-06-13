/**
 * @param {number} millis
 */
 function sleep(millis) {
    // construct a new promise object that resolves after millis milliseconds
    let result = new Promise((resolve, reject)=> {
        setTimeout(()=> resolve('done'), millis)
    })
    // return the promise
    return result;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
