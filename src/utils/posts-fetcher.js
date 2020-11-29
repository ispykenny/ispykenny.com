import axios from 'axios';

let posts = [];

const fetchPosts = () => axios.get('https://kennykrosky.com/wp-json/wp/v2/posts')
  .then((res) => res.data)
  .catch((err) => console.log(err))

export { fetchPosts }