import axios from 'axios';


    const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='94137f962ee9b39821fb3cbb6f2c820b';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=94137f962ee9b39821fb3cbb6f2c820b';

//https://api.themoviedb.org/3/trending/all/day?api_key=94137f962ee9b39821fb3cbb6f2c820b
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}