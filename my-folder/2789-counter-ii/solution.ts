type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}


class CounterObj {
    value: number
    init: number
    constructor(num: number){
        this.init = num
        this.value = num;
    }

    increment(){
        return this.value += 1;
    }

    decrement(){
            return this.value -= 1;
    }

    reset(){
        return this.value = this.init;
    }
    
}


function createCounter(init: number): Counter {
    return new CounterObj(init);
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
