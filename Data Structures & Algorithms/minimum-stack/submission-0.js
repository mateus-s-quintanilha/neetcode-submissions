class MinStack {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const node = {val: val, next: null, prev: this.head, min: this.head === null ? val : Math.min(val, this.head?.min)}
        
        if (this.head === null) {
            this.head = node;
        } else {
            const prev = this.head;
            prev.next = node;
            this.head = node
            
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.head === null) return null;

        const popped = this.head;
        const newHead = this.head.prev;
        
        this.head = newHead;
        if (this.head !== null) {
            this.head.next = null;
        }

        return popped?.val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.head?.val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.head?.min;;
    }
}

