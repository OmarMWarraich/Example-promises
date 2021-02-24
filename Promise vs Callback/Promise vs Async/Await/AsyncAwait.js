function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`making request to ${location}`)
        if(location == 'google'){
            resolve('google says hello')
        }
        else{
            reject('we can only talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log('Processing response')
        resolve(`Extra info ${response}`)
    })
}
async function doWork(){
    try{

        const response = await makeRequest('google')
        console.log('Response received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    }
    
catch(err){
    console.log(err)
}
}
doWork()