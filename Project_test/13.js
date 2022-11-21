const validator = {
    get (target, prop){
        return prop in target ? target[prop]: `Поля ${prop} в объекте нет`
    },

    set (target, prop, value){
        if(value.length > 2){
            Reflect.set(target, prop, value)
        } else{
          console.log('Длинна должна быть больше двух символов! Сейчас символов - ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password:'12345'
}

const formProxy = new Proxy(form, validator)

// formProxy.password = '12'
//
// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy['username'])

function log(message) {
    console.log('[Log]:', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray){
        if(argArray.length === 1){
            Reflect.apply(target, thisArg, argArray)
        } else{
            console.log('Количество аргументов не совпадает!')
        }
    }
})

proxy('Custom message')
proxy()
proxy('Message', 2)