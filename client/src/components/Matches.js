import axios from 'axios';
import {useEffect, useState} from 'react';

export default function Matches(props) {
  const [matchedProfiles, setMatchedProfiles] = useState(null)

  const matchedUserIds = props.matches.map(({ user_id }) => user_id)

  const getMatches = async() => {
    try {
      const response = await axios.get('http://localhost:8000/users', {
        params: {userIds: JSON.stringify(matchedUserIds)}
      })
      setMatchedProfiles(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <div className="matches-container">
      {matchedProfiles?.map((match, _index) => (
        <div key={{_index}} className="match-card" onClick={() => props.setClickedUser(match)}>
          <div className='img-container'>
            <img src={match?.url} alt={match?.first_name + 'profile'}/>
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}

    </div>
  )
};