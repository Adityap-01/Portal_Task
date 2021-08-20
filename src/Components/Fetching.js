import React, { useState, useEffect } from "react";
import axios from "axios"

// Using axios for fetch and then displaying in a table

const Fetching = () => {
    const [posts, setposts] = useState([]);
    const [sorttype, setsorttype] = useState('desn');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://my-json-server.typicode.com/Adityap-01/mockjson/posts");
            setposts(result.data);
        };
        fetchData();
    }, []);

    
    const sorted = posts.sort((a,b)=>{
        const isReversed = (sorttype === 'asn')? 1:-1;
        return isReversed* a.date.localeCompare(b.date)
    })

    return (
        <div>
            <table border="1">
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Location</th>
                </thead>
                {sorted.map(posts => (
                    <tr>
                        <td>{posts.title}</td>
                        <td>{posts.description}</td>
                        <td>{posts.date}</td>
                        <td>{posts.location}</td>
                    </tr>
                ))}
            </table>
            <br />

            <p>API Link - <a href="https://my-json-server.typicode.com/Adityap-01/mockjson/posts">https://my-json-server.typicode.com/Adityap-01/mockjson/posts</a></p>
        </div>
    )
}

export default Fetching;
