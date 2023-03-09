import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Matches(props) {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookies, removeCookies] = useCookies(null);

  const matchedUserIds = props.matches.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMatches();
  }, [props.matches]);

  const filteredMatchesProfiles = matchedProfiles?.filter((matchedProfile) =>
    matchedProfile.props.matches.filter((profile) => profile.user_id == userId)/length > 0
  );

  return (
    <div className="matches-container">
      {filteredMatchesProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => props.setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + "profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
}
