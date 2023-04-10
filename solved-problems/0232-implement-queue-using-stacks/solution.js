var MyQueue = function() {
    this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.array.push(x)
    console.log(this)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const first = this.array[0]
this.array.shift()
    console.log(this)
    return first
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.array[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.array.length > 0){
        return false
    }
    return true
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
