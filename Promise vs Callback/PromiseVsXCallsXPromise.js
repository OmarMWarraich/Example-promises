function watchSuitsPromise() {
    let userLeft = false
    let userWatchingSuits = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'Episode Completed',
                message: 'Shit'
            })
        } else if (userWatchingSuits) {
            reject({
                name: 'User Watching Suits',
                message: 'With Harvey'
            })
        } else {
            resolve('Awesome')
        }
    })
}
watchSuitsPromise().then(message => {
    console.log(message)
}).then(message => {
    console.log(message)
}).then(message => {
    console.log(message)
}).catch(error => {
    console.error(error.name + ': ' + error.message)
})