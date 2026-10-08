const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = resolve({"message" : "delayed"})  
        },500)
    })
}

const delyayedException = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let failure = reject({"error" : "delayed exception"})  
        },500)
    })
}

resolvedPromise()
    .then(success => console.log(success))
    .catch(err => console.log(err))

delyayedException()
    .then(failure => console.log(failure))
    .catch(err => console.log(err))