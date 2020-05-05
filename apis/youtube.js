import axios from 'axios';
import { YOUTUBEAPI_KEY } from '../config/keys';

export const KEY = YOUTUBEAPI_KEY;

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBEAPI_KEY
  }
});