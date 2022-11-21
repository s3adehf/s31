const map = new Map(
    [['a',1]]
)

//console.log(map.get('a'))
map.set('b', 2).set(NaN, 'Number').set(42, 'demo')
// console.log(map.get(NaN))
// map.clear()
// console.log(map.has(42))
// map.delete('b')
// console.log(map.size)

// console.log(map.keys())
// console.log(map.entries())
// console.log(map.values())

//Set
const set = new Set([1,1,2,4,4,5,6,6,3,34,53])
console.log(set.size)
console.log(set.add(21))
//set.clear()
set.delete(1)
console.log("1111set", set)

console.log(map.keys())
console.log(map.values())
console.log(map.entries())
