class aForger {
    constructor(...arr) {
        this.arr = arr
    }
    add(end, ...arr) {
        let str = false
        if (Array.isArray(arr[0]) === true) {
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
        } else if (Number.isInteger(end) === true) {
            if (str === true) {
                for (var i=0;i < arr[0].length;i++) {
                    this.arr.splice(end+i, 0, arr[0])[i]
                }
            } else {
                for (var i=0;i < arr.length;i++) {
                    this.arr.splice(end+i, 0, arr[i])
                }
            }
        } else {
            if (str === true) {
                this.arr = this.arr.concat(arr[0])
            } else {
                this.arr = this.arr.concat(arr)
            }
        }
        return this.arr
    }
    delete(end) {
        if (end == "end") {
            this.arr.pop()
        } else if (end == "start") {
            this.arr.shift()
        } else if (Number.isInteger(end) === true) {
            let d = this.arr.splice(end, 1)
        } else {
            this.arr.pop()
        }
        return this.arr
    }
    copy() {
        return this.arr.splice()
    }
    length() {
        return this.arr.length
    }
    asStr(sep) {
        return this.arr.join(sep || ",")
    }
    fill(val, start, end) {
        this.arr.fill(val, start || 0, end || this.arr.length)
        return this.arr
    }
    includes(inc) {
        return this.arr.includes(inc)
    }
    posOf(ele) {
        return this.arr.indexOf(ele)
    }
    reverse() {
        this.arr.reverse()
        return this.arr
    }
    sort(fn) {
        this.arr.sort(fn || undefined)
        return this.arr
    }
    from(fr) {
        this.arr = Array.from(fr)
        return this.arr
    }
    filter(fn) {
        let out = this.arr.filter(fn)
        return out
    }
    map(fn) {
        let out = this.arr.map(fn)
        return out
    }
    reduce(fn) {
        let out = this.arr.reduce(fn)
        return out
    }
    some(fn) {
        let out = this.arr.some(fn)
        return out
    }
    find(fn) {
        let out = this.arr.find(fn)
        return out
    }
    every(fn) {
        let out = this.arr.every(fn)
        return out
    }
    at(loc) {
        console.warn("at is a proposed methoed and not implemented as of 2021\nif you want to use it.\nyou need to use a polyfill like: https://github.com/es-shims/Array.prototype.at")
        return this.arr.at(loc)
    }
}

function mergeArray(...arr) {
    let ar = arr[0]
    for (var i=1;i < arr.length;i++) {
        ar = ar.concat(arr[i])
    }
    return ar
}

export { aForger as aForge, mergeArray }