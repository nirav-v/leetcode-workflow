type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let modified = init;
	return {
        increment: () => {
            modified += 1;
            return modified;
        },
        decrement: () => {
            modified = modified - 1;
            return modified;
        },
        reset: () => {
            modified = init;
            return modified;
        },

    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
