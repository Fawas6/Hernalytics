import { useState, useEffect } from 'react'

const President = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch("https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president").then(res=>{
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
                    <div className='post-card1' key={item.full_name}>
                        <div className='post-full_name'>{item.full_name}</div>
                        <div className='post-political_party_name'>{item.political_party_name}</div>
                        <div className='post-candidates_vote'>{item.candidates_vote}</div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default President;