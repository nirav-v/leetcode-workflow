/**
 * @param {number} millis
 */
 function sleep(millis) {
 
        return new Promise((resolve, reject) =>{
            setTimeout(()=> resolve("Awake"), millis)
        })
 
 
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
