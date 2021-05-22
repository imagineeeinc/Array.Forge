class aForger {
    constructor(...arr) {
        this.arr = arr
    }
    add(end, ...arr) {
        let str = false
        if (Array.isArray(arr) === true) {
            str = true
        }
        if (end == "end") {
            if (str === true) {
                this.arr = this.arr.concat(arr[0])
            } else {
                this.arr = this.arr.concat(arr)
            }
        } else if (end == "start") {
            if (str === true) {
                this.arr = arr[0].concat(this.arr)
            } else {
                this.arr = arr.concat(this.arr)
            }
        } else if (isNaN(end) === false) {
            if (str === true) {
                this.arr = arr[0].concat(this.arr)
            } else {
                this.arr = this.arr.splice(end, end-1, arr)
            }
        }
        return this.arr
    } 
}

export { aForger as aForge }