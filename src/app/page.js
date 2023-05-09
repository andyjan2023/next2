
import axios from "axios";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Page=async( )=>{
await sleep(5000)
 const res=await axios.get('https://jsonplaceholder.typicode.com/users/1').then(res=>res.data)

 
//throw new Error('not found')



   
    console.log(res)
  
    return <>{JSON.stringify(res)}</>
}

export default Page;