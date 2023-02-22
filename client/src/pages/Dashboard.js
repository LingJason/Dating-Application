import TinderCard from "react-tinder-card"
import {useState, useEffect} from "react"
import ChatContainer from "../components/ChatContainer"
import axios from "axios"
import {useCookies} from "react-cookie"


const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/candid-photography-3.jpg'
  }, {
    name: 'Erlich Bachman',
    url: 'http://www.picturecorrect.com/wp-content/uploads/2012/04/candid-photo2.jpg'
  }, {
    name: 'Jared Dunn',
    url: 'https://www.adweek.com/files/2015_May/iStock-Unfinished-Business-6.jpg'
  }, {
    name: 'Dinesh Chugtai',
    url: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/07/GettyImages-482534949-770x462.jpg'
  }
]


export default function Dashboard() {

  const [user, setUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useState(['users'])

  const userId = cookies.UserId


  const getUser = async () => {
    try {
      axios.get('http://localhost:8000/user', {params: {
          userId
        }})
      setUser(Response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (<> {
    user && <div className="dashboard">
      <ChatContainer user={
        props.user
      }/>
      <div className="swiper-container">
        <div className="card-container"> {
          characters.map((character) => <TinderCard className="swipe"
            key={
              character.name
            }
            onSwipe={
              (dir) => swiped(dir, character.name)
            }
            onCardLeftScreen={
              () => outOfFrame(character.name)
          }>
            <div style={
                {
                  backgroundImage: 'url(' + character.url + ')'
                }
              }
              className='card'>
              <h3> {
                character.name
              }</h3>
            </div>
          </TinderCard>)
        }

          <div className="swipe-info"> {
            lastDirection ? <p>
              You Swiped {lastDirection}</p> : <p/>
          } </div>

        </div>
      </div>
    </div>
  } </>)
};
