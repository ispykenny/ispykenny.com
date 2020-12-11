import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inner from './Grid';

const Instagram = () => {
  const [instafeed, setInstaFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      let feed = await fetchFeeder('https://www.instagram.com/ispykenny/?__a=1')
      // setInstaFeed(feed)
      console.log(feed)
    }

    fetchFeed();
  }, [])

  const fetchFeeder = (url) =>  axios(url)
    .then(result => result)
    .catch((erro) => console.log(erro))

  return (
    <div>
      <Inner>
        instagram
      </Inner>
    </div>
  )
}

export default Instagram;