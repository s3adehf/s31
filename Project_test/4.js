//rest
function average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}
//console.log(average(6,7,78,5,9))

//spread
//const array = [1,2,3,4,58,52]
//console.log(...array)
//console.log(Math.max(...array))
//console.log(Math.min(...array))
//const fib = [1,...array]
//console.log(fib)

//destructuring
const array = [1,2,3,4,58,52]
const [a,b]= array
//console.log(a,b)

//Object
const address = {
    country: 'Russia',
    city: 'SPb',
    //street:'Lenina',
    concat: function (){
        return `Адрес:${this.country}, ${this.city}, ${this.street}`
    }
}
//console.log(address.concat())
//const{city,country,street = 'Nevskii', concat: addressConcat}=address
//console.log(city)
//console.log(street)
//console.log(addressConcat.call(address))

const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, steet: 'Tverskaia', code: 123.}

console.log(newAddress)