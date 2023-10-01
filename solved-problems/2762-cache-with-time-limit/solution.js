
var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    
    let alreadyExists = this.cache.has(key);

    // IF the key still exists that means it has not expired and its setTimeout is still registered to fire, so we want to clear the old timeout before setting the new value and timeout
    if (alreadyExists) clearTimeout(this.cache.get(key).timeoutId)
    
    const timeoutId = setTimeout(()=> {
        console.log("timeout fired - key deleted");
        this.cache.delete(key)}
        , duration);
    
    // need to also store timeoutId, so that it can be referenced and cleared if needed on next function call
    this.cache.set(key, {value, timeoutId});
    

    return alreadyExists;   
    
 
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) return this.cache.get(key).value;
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
