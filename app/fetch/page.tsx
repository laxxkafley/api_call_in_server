//Task to print Image on your web site using avatar_url return by github PI
import Image from "next/image"
export default async function MyFetch(){

    const data = await fetch('https://api.github.com/users/warudom')
    const result=await data.json()
    console.log(result)
    console.log("Url", result.avatar_url)
    
    if(!result) return <>...loading</>
    return(
    <> Hi Fetch
   
        
    
   
    </>)
}