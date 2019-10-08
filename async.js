
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('I have succeeded')
    }, 1000)

})


myPromise
    .then(value => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));