import React, {useEffect} from 'react';
import axios from 'axios';

const runpurge = () => {
  return axios.post('https://api.netlify.com/build_hooks/60d795fdc6b1ce58da8a3551', {},  null)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

const Purge = () => {
  useEffect(() => {
    runpurge().then((res) => console.log(res))
  }, []);
  return (
    <div>Purging</div>
  );
}
export default Purge;