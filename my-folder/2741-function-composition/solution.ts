type F = (x: number) => number;

function compose(functions: F[]): F {
    
	return function(x) {
        
        if (!functions.length) return x;

        return functions.reduceRight((accumulator, currentValue) => currentValue(accumulator), x);

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
