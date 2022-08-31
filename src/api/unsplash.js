import axios from "axios";

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1zMiK3HXsQ28elxUJWwtddf-oQhVC_v7TyqelilAbw8'
  }
});

export default unsplash