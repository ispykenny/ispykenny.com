import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inner from './Grid';

const Instagram = () => {
  const [instafeed, setInstaFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      let feed = await fetchFeeder()
      setInstaFeed(feed)
      console.log(feed, 'here')
    }

    fetchFeed();
  }, [instafeed])

  const fetchFeeder = () => {
    axios('https://www.instagram.com/ispykenny/?__a=1')
    .then(res => console.log(res))
    .catch((erro) => console.log(erro))
  }

  return (
    <div>
      <Inner>
        instagram
      </Inner>
    </div>
  )
}

export default Instagram;