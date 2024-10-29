'use client';

import { useState, useEffect } from 'react';

export type PostType = {
    id: number;
    content: string;
    author: string;
    date: string;
    category: string;
};

export type TitleType = {
    title: string;
};

export default function FetchClientComponent() {
    const [postData, setPostData] = useState<PostType[]>([]);
    const [titleData, setTitleData] = useState<string[]>([]);
    const [showPostData, setShowPostData] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch post data
                console.log("Attempting to fetch post data...");
                const postResponse = await fetch('/api/vercel');
                
                if (!postResponse.ok) {
                    throw new Error(`Post data fetch failed with status ${postResponse.status}: ${postResponse.statusText}`);
                }
                
                const postDataResult = await postResponse.json();
                console.log("Fetched post data:", postDataResult);
                setPostData(postDataResult.postData || []); 

                // Fetch title data
                console.log("Attempting to fetch title data...");
                const titleResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
                
                if (!titleResponse.ok) {
                    throw new Error(`Title data fetch failed with status ${titleResponse.status}: ${titleResponse.statusText}`);
                }
                
                const titleDataResult = await titleResponse.json();
                console.log("Fetched title data:", titleDataResult);
                
                // Only include titles in the titleData array, matching the number of posts
                setTitleData(titleDataResult.slice(0, postDataResult.postData?.length || 0).map((item: any) => item.title));
                
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(`Error fetching data: ${err instanceof Error ? err.message : 'Unknown error'}`);
            }
        }
        fetchData();
    }, []);

    return (
        <div >
            <button className=" p-4 ml-56" onClick={() => setShowPostData(true)}>
                A
            </button>
            <button  className="ml-64"onClick={() => setShowPostData(false)}>B</button>

            <div >
                

                {/* Error message */}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {!showPostData && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-indigo-600">Title Data</h2>
                        {titleData.length > 0 ? (
                            titleData.map((title, index) => (
                                <p key={index} className="border-2 border-purple-600 bg-white p-6 rounded-lg shadow-lg ml-56  max-w-2xl   ">
                                    Title: {title}
                                </p>
                            ))
                        ) : (
                            <p className="bg-slate-400 text-white p-2 rounded mb-2">No title data available.</p>
                        )}
                    </div>
                )}
                {/* Post Data Section */}
                {showPostData && (
                    <div>
                       
                        {postData.length > 0 ? (
                            postData.map((post, index) => (
                                <div
                                    key={post.id}
                                    className="border-2 border-purple-600 bg-white p-6 rounded-lg shadow-lg ml-56  max-w-2xl "
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                                        {titleData[index] || "Untitled"} {/* Use title from JSONPlaceholder or fallback */}
                                    </h3>
                                    <p className="bg-slate-400 text-white p-2 rounded mb-2">ID: {post.id}</p>
                                    <p className="bg-purple-100 text-purple-700 p-4 rounded mb-2">Content: {post.content}</p>
                                    <p className="text-gray-600 mb-2">Author: {post.author}</p>
                                    <p className="text-gray-600 mb-2">Date: {post.date}</p>
                                    <p className="text-gray-600">Category: {post.category}</p>
                                    <hr className="my-4 border-purple-500" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 text-center">No post data available.</p>
                        )}
                    </div>
                )}

                {/* Title Data Section */}
              
            </div>
        </div>
    );
  }