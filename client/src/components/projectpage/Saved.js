import React, { Component } from 'react'
import HeaderProject from './HeaderProject'
import Jumbotron from './Jumbotron1'
import Card from './Card'
import Myplaces from './Myplaces'
import Footer from './Footer'
import API from '../../utils/API'

export class Saved extends Component {
  static defaultProps = {
    user: []
}
    state = {
      places: []
    }

    componentDidMount = () => {
      this.loadPlaces();
    }

    loadPlaces = () => {
      API.getPlaces()
      .then(res => 
              this.setState({ places: res.data})
      )
      .catch(err => console.log(err));
  };

  deletePlaces = (index) => {
    API.deletePlace(index)
      .then(res => this.loadPlaces())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <HeaderProject logout={this.logout}/>
      <Jumbotron />
      <Card
                heading={"saved places:"}
              >
                {!this.state.places.length ? (
                  <h1 className="nobook">You have no places saved</h1>
                ) : (
                    this.state.places.map((place) => {
                      return (
                        <Myplaces
                          key={place._id}
                          index={place._id}
                          name={place.name}
                          address={place.address}
                          type={place.type}
                          deletePlaces={this.deletePlaces}
                          />
                      );
                    }
                    )
                )}
              </Card> 
              <Footer />
      </div>
    )
  }
}

export default Saved
