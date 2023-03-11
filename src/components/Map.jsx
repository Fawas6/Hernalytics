import { useState, useEffect } from 'react'

const Map = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch("https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map").then(res=>{
            return res.json();
        }).then(result=>{
          console.log(result);
          setPosts(result);
        })
        .catch((err) => {
            console.log(err.message);
        });
    
      },[])
    return ( 
        <div className='posts-container'>
          {posts.map((item) => {
                return (
                    <div className='post-card2' key={item.name}>
                          <div className='post-name'>State: {item.name}</div>
                          <div className='post-political_party_name'>Party: {item.political_party_name}</div>
                          <div className='post-id'>ID: {item.id}</div>
                          <div className='post-country_id'>Country ID: {item.country_id}</div>
                          <div className='post-abbr'>Abbr: {item.abbr}</div>
                          <div className='post-is_active'>Is Active: {item.is_active}</div>
                          <div className='post-created_at'>Created: {item.created_at}</div>
                          <div className='post-updated_at'>Updated: {item.updated_at}</div>
                          <div className='post-candidate_votes'>Votes: {item.candidate_votes}</div>   
                    </div>
                )
            })}       
        </div>
     );
}
 
export default Map;