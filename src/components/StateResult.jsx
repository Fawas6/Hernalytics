import { useState, useEffect } from 'react'

const StateResult = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className='posts-container'>
            {Object.keys(data).map(key => (
                <div key={key}>
                <h2>{key}</h2>
                <ul>
                    {data[key].map(item => (
                    <li key={item.political_party_name}>
                        {item.political_party_name}: {item.candidate_votes}
                    </li>
                    ))}
                </ul>
                </div>
        ))}    
        </div>
    );
}
 
export default StateResult;