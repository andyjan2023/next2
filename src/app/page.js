import axios from "axios";
import { Suspense } from "react";//!only used on component
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Page = async () => {
//  await sleep(5000);


console.log(JSON.parse(dd));
console.log(dd.json);
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/users/1",{next:{revalidate:60}})
    .then((res) => res.data);




  return (
  
   <>{JSON.stringify(res)}</>   
 
  );
};

export default function MyPage() {
  return ( <Suspense fallback={<div>Suspense..</div>}>  <Page />;</Suspense>
)
}


let dd=JSON.stringify ({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }}})
    
   