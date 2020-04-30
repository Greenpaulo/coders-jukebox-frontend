import axios from 'axios';

const KEY = 'AIzaSyDWTK5ebqXGHw3N4FSdxE_qO2v0LEs28Xo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});