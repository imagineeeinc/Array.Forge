import { aForge as forgeable, mergeArray } from "../src/array.forge.js"

var arry = new forgeable("loo","li", "loo", "lum")

arry.add(4, "lye", "low", "lee", "lum")

console.log(mergeArray(arry.arr, arry.arr))

Array.prototype.ash = function() {
    return this
}

console.log(arry)

arry.fill("looo")
