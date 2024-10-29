// http endpoint

// export async function GET() {
//     const response = await fetch('https://api.vercel.app/blog');
//     const data = await response.json();
//     const title=await fetch(" https://jsonplaceholder.typicode.com/photos")
//     const titleData= await title.json();
    
//     return Response.json(data)
//    }
   

// api/route.ts
export async function GET() {
    const postResponse = await fetch('https://api.vercel.app/blog')
    const postData = await postResponse.json()

    const titleResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
    const titleData = await titleResponse.json()

    return new Response(
      JSON.stringify({ postData, titleData }), 
      { headers: { 'Content-Type': 'application/json' } }
    )
}
