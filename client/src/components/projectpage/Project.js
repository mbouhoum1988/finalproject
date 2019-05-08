import React, { Component } from 'react'
import fire from '../../config/fire'
import HeaderProject from './HeaderProject'
import Jumbotron from './Jumbotron'
import Search from './Search'
import Card from './Card'
import Details from './Details'
import Footer from './Footer'

import API from '../../utils/API'

export class Project extends Component {
  static defaultProps = {
    user: []
  }

  state = {
    result: [],
    places: [],
    search: ''
  }

  searchPlaces = query => {
    API.search(query)
      .then(res => {
        const result = res.data.results.map((place) => place);
        this.setState({ result })
      }
      )
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.searchPlaces(this.state.search);
    this.setState({
      search: " "
    })
  };

  loadPlaces = () => {
    API.getPlaces()
      .then(res =>
        this.setState({ places: res.data })
      )
      .catch(err => console.log(err));
  };

  savePlace = event => {
    event.preventDefault();
    const index = event.target.dataset.index;
    const place = this.state.result[index];
    console.log(index)
    console.log(place)
    if (place) {
      API.savePlace({
        name: place.name,
        address: place.formatted_address,
        type: place.types,
      })
        .then(res => this.loadPlaces())
        .catch(err => console.log(err));
    }
  };

  logout = () => {
    fire.auth().signOut();
  }

  render() {
    return (
      <div >
        <HeaderProject logout={this.logout} />
        <Jumbotron />
        <Search
          value={this.state.search}
          handleInput={this.handleInput}
          handleClick={this.handleClick}
        />
        <Card
          heading={"Search:"}
        >
          {!this.state.result.length ? (
            <h1 className="nobook">Search For Your Next Destination</h1>
          ) : (
              this.state.result.map((place, index) => {
                return (
                  <Details
                    key={index}
                    index={index}
                    name={place.name}
                    address={place.formatted_address}
                    type={place.types}
                    savePlace={this.savePlace}
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

export default Project;
