import React from 'react';
import './Business.css';


const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: "PJ's shitty ass apartment",
  address: '57 Go Fuck Yourself Street',
  city: "Cottage Cheese County",
  state: 'Maine',
  zipCode: '696969',
  category: 'Rachelmade',
  rating: "6 Peej",
  normalpeoplerating: " 1 Normal People Stars",
  reviewCount: '104 reviews of my ass'
}

class Business extends React.Component {
    render() {

        return (
           
          <div className="Business">
            <div className="image-container">
              <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
              </div>
              <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating} Stars</h3>
                <h3 classname="normalpeoplerating">{business.normalpeoplerating}</h3>
                <p>{business.reviewCount}</p>
              </div>
            </div>
          </div>
        )
    }
}


export default Business;