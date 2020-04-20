let assembleLink = function(lat, lon) {
    return `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.KEY}`;
  };
  
  async function getJson(url) {
    return await axios
      .get(url)
      .then((x) => {
        return x.data;
      })
     // .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      });
  }