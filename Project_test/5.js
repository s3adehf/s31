const cityField ='city'

const job = 'Frontend'

// person[cityField] = (person[cityField] ? person[cityField] : 0) + 1
const person = {
    age: 27,
    name: 'Irina',
    job,
    [cityField]: 'SPb',
    'country-live': 'Russia',
    print: () => 'Person',
    toString(){
        return Object
            .keys (this)
            .filter (key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}
//console.log(person.toString())
//console.log(person.print())
//console.log(person)

//Methods
const first = {a: 1}
const second = {b: 2}

//console.log(Object.is(20,20))
//console.log(Object.assign({},first, {
//    c: 2,
//    d: 3
// }))
//console.log(first)

const obj = Object.assign({},first, {
    c: 2,
    d: 3
 })
//console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
