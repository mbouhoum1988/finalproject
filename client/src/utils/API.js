import axios from "axios";

export default {
    search: (query) => {
      return axios.get(`/api/call/${query}`);
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