function watchSuitsCallback(callback, errorCallback)    {
    let userLeft = false
    let userWatchingSuits = false

    if (userLeft) {
        errorCallback({
            name: 'Episode Completed',
            message: 'Shit'
        })
    }  else if (userWatchingSuits) {
        errorCallback({
            name: 'User Watching Suits',
            message: 'With Harvey'
        })
    } else {
        callback('Awesome')
    }
}
watchSuitsCallback(message => {
    console.log(message)
}, error => {
    console.log(error.name + '' + error.message)
})
