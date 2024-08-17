type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {

    subscribe(eventName: string, callback: Callback): Subscription {
        // add the callback as a method under the label of the event name
        if (!this[eventName]) {
            this[eventName] = [callback]
        } else {
            this[eventName].push(callback)
        }

        return {
            unsubscribe: () => {
                // remove the specific callback that was added 
                const indexToRemove = this[eventName].findIndex(item => item === callback)
                if (indexToRemove < 0) return
                this[eventName].splice(indexToRemove, 1)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        if (!this[eventName]) return []
        let result = []
        for (const cb of this[eventName]){
            result.push(cb(...args))
        }
        return result
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
