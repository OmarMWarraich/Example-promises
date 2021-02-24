function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`)
        if (location == 'google'){
            resolve('google says hello')
        } else{
            reject('We can only talk to Google')
        }
    })
}
function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra info ${response}`)
    })
}
makeRequest('google').then(response =>{
    console.log('Response Recieved')
    return processRequest(response)
}).then(processResponse=>{
    console.log(processResponse)
}).catch(err =>{
    console.log(err)
})
