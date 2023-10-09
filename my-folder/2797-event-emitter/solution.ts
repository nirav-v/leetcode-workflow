type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    
	subscribe(eventName: string, callback: Callback): Subscription {
		
        if (!this[eventName]) this[eventName] = []
        this[eventName] = [...this[eventName], callback];

		return {
			unsubscribe: () => {
				this[eventName].shift();
                return undefined;
			}
        };
	}

	emit(eventName: string, args: any[] = []): any[] {
		
        if (!this[eventName]) return [];
        
        const result = []

        for (const fn of this[eventName]){
            result.push(fn(...args));
        }

        return result;
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
