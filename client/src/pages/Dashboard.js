import TinderCard from "react-tinder-card";
import {useState, useEffect} from "react";
import ChatContainer from "../components/ChatContainer";
import axios from "axios";
import {useCookies} from "react-cookie";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useState(["users"]);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      axios.get("http://localhost:8000/user", {params: {
          userId
        }});
      setUser(Response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gender-users", {
        params: {
          gender: user ?. gender_interest
        }
      });
      setGenderedUsers(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
    getGenderedUsers();
  }, [user, genderedUsers]);

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put('http://localhost:8000/addmatch', {userId, matchedUserId})
      getUser()
    } catch (err) {
      console.log(err.message)
    }
  }

  const swiped = (direction, swipedUserId) => {

    if (direction === 'right') {
      updateMatches(swipedUserId)
    }

    setLastDirection(direction);
  };

  const outOfFrame = (first_name) => {
    console.log(first_name + " left the screen!");
  };

  const matchedUserIds = user ?. matches.map(({user_id}) => user_id).concat(userId)

  const filteredGenderedUsers = genderedUsers ?. filter(genderedUsers => !matchedUserIds.includes(genderedUsers.user_id))

  return (
    <> {" "}
      {
      user && (
        <div className="dashboard">
          <ChatContainer user={
            props.user
          }/>
          <div className="swiper-container">
            <div className="card-container">
              {" "}
              {
              filteredGenderedUsers?. map((genderedUser) => (
                <TinderCard className="swipe"
                  key={
                    genderedUser.first_name
                  }
                  onSwipe={
                    (dir) => swiped(dir, genderedUser.user_id)
                  }
                  onCardLeftScreen={
                    () => outOfFrame(genderedUser.first_name)
                }>
                  <div style={
                      {
                        backgroundImage: "url(" + genderedUser + ")"
                      }
                    }
                    className="card">
                    <h3> {
                      genderedUser.first_name
                    }</h3>
                  </div>
                </TinderCard>
              ))
            }
              <div className="swipe-info">
                {" "}
                {
                lastDirection ? <p>You Swiped {lastDirection}</p> : <p/>
              }
                {" "} </div>
            </div>
          </div>
        </div>
      )
    }
      {" "} </>
  );
}
