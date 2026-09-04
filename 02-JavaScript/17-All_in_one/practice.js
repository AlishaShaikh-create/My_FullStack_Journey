

async function getInfo(){
    try{
        const result = await Promise.reject("Something went wrong")
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
getInfo()