import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react'

function App() {

  const contactsCopy = [...contacts]
  const contactsSel = contactsCopy.slice(0, 5)
  const [contactList, setContactList] = useState(contactsSel)

  const addRandom = () => {
    let random = contacts[Math.floor(Math.random() * (contacts.length - 1))]
    let copy = [...contactList]
    copy.push(random)

    setContactList(copy)
  }

  const sortPopularity = () => {
    let popularity = [...contacts].sort((firstCelebrity, secondCelebrity) => secondCelebrity.popularity - firstCelebrity.popularity)

    setContactList(popularity)
  }

  const sortName = () => {
    let name = [...contacts].sort((firstCelebrity, secondCelebrity) => secondCelebrity.name > firstCelebrity.name ? 1 : -1)

    setContactList(name)
  }

  const deleteCelebrity = celebrityID => {
    let newCelebrities = contactList.filter(elm => elm.id !== celebrityID)

    setContactList(newCelebrities)
  }

  // const removeMovie = movieID => {
  //   const newMovies = moviesList.filter(elm => elm._id != movieID)              // retorna nuevo array
  //   setMoviesList(newMovies)
  // }



  return (
    <div className="App">

      <h1> <strong>CELEBRITIES</strong></h1>
      <hr></hr>
      <div>
        <button onClick={addRandom}>ADD RANDOM CONTACT</button>
      </div>

      <div>
        <button onClick={sortPopularity}>SORT BY POPULARITY</button>
      </div>

      <div>
        <button onClick={sortName}>SORT BY NAME</button>
      </div>

      <div>
        <table>
          <tr className="table-header">
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>WON OSCAR</th>
            <th>WON EMMY</th>
            <th>ACTIONS</th>
          </tr>

          {contactList.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td> {contact.wonOscar ? <span>🏆</span> : <span>🚫</span>}</td>
                <td>{contact.wonEmmy ? <span>🏆</span> : <span>🚫</span>}</td>
                <td>
                  <button onClick={() => deleteCelebrity(contact.id)} >DELETE</button>
                </td>
              </tr>
            )
          })}
        </table>

      </div>

    </div>
  );
}

export default App;
