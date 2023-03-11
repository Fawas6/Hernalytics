import { useState, useEffect } from 'react'

const StateResult = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch("https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result").then(res=>{
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
                    <div>
                     <table>
                        <thead>
                            <tr>
                                <td>States</td>
                                <td>APC</td>
                                <td>LP</td>
                                <td>PDP</td>
                            </tr>
                        </thead>
                        <tbody>
                         {posts.item && posts.map((item) => {
                            return (
                             <tr className='post-card3'>
                                <td></td>
                                <td></td> 
                                <td></td> 
                                <td></td>   
                             </tr>
                            )
                         })}
                        </tbody>
                         
                                
                          
                     </table>
                    </div>
        </div>
     );
}
 
export default StateResult;