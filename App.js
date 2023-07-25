import React from "react"
import Properties from "./Properties";
import Icon from "./Images/house.png"
import searchIcon from "./Images/search.png"

function App() {

]
  const [listings, setListings] = React.useState([])
  const [place, setPlace] = React.useState("")
  const [childrenCount, setChildrenCount] = React.useState("")
  const [adultCount, setAdultCount] = React.useState("")
  const [checkIn, setCheckIn] = React.useState("")
  const [checkOut, setCheckOut] = React.useState("")


  
  function componentDidMount() {
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${place}&checkin=${checkIn}&checkout=${checkOut}&adults=${adultCount}&children=0&infants=${childrenCount}&pets=0&page=1&currency=USD`;
    const requestOptions = {
        method: 'GET',
        headers: { 'X-RapidAPI-Key': 'c25cd1f38emshdb9cd9487ed39c7p121fe3jsne77a5642d966',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com' },
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          setListings(data.results.map(info =>
            {
              return {
              title: info.name, 
              img: info.images[0],
              price: info.price.total,
              details: {
              rentalType: info.type,
              roomNum: info.bedrooms,
              bathNum: info.bathrooms,
              maxPeople: info.persons,
              websiteURL: info.url}
            }
            }
            ))
        });

        
      }


  
  return (
    <div className="App">
      <div className="input">
        <div className="input-box">
          <input 
          id="place"
          type="text"
          name="place"
          placeholder="City, Country"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          ></input>
          <input 
          type="number"
          min={1}
          name="childrenCount"
          placeholder="Children (2-13)"
          onChange={(e) => setChildrenCount(e.target.value)}
          value={childrenCount}
          ></input>
          <input 
          type="number"
          min={0}
          name="adultCount"
          placeholder="Adults (13+)"
          onChange={(e) => setAdultCount(e.target.value)}
          value={adultCount}
          ></input>
          <input 
          type="date"
          name="checkIn"
          placeholder="Check in date"
          onChange={(e) => setCheckIn(e.target.value)}
          value={checkIn}
          ></input>
          <input 
          type="date"
          name="checkOut"
          placeholder="Check out date"
          onChange={(e) => setCheckOut(e.target.value)}
          value={checkOut}
          ></input>
          <button onClick={componentDidMount}> <img id="search-button"src={`${searchIcon}`}></img></button>
        </div>
        
      </div>
      <Properties 
        listings={listings}
      />
    </div>
  );
}

export default App;
