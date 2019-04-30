import axios from "axios";

const BASEURL ="https://maps.googleapis.com/maps/api/place/textsearch/json?query=point+of+interest+in+"
const key="&key=AIzaSyCrt6AwoIdJpK1fTr4Qq6SObHysC6RFwS8";

// const BASEURL1 = "https://www.googleapis.com/books/v1/volumes?q=";
// const BASEURL3 = "https://maps.googleapis.com/maps/api/place/details/output?q="

// const URL = "https://api.sygictravelapi.com/1.1/en/places/list?query=";
// const k = "ByeW9B43Qz70WH1W7evrH9IBwBllBLUNatjnnmld";

// const url = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    search: (query) => {
      return axios.get(BASEURL + query + key, {
        headers:{
          'Content-Type': 'application/json'
        }
      });
    },

    getPlaces: () => {
      return axios.get("/api/places");
    },

    Place: function(id) {
      return axios.get("/api/places/" + id);
    },
    
    deletePlace: (id) => {
      return axios.delete("/api/places/" + id);
    },
    
    savePlace: function (placedata) {
      return axios.post("/api/places", placedata);
    }
  }; 