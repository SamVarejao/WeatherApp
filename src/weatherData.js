const axios = require("axios");

exports.getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos){
      let cod=pos.coords;
      return resolve(cod);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      return reject;
    }
  });
};

exports.assembleLink = function(lat, lon, key) {
  let url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}`;
  return url;
}; 

exports.getJson= async function (url) {
  return await axios
    .get(url)
    .then((api) => {
      return api.data.data[0];
    })
    .catch((error) => {
      console.error(error);
    });
}
