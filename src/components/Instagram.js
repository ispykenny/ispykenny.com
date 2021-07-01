import React, {useEffect, useState} from 'react';

const fetch_ig_posts = () => {
  return fetch('https://www.instagram.com/ispykenny/?__a=1')
  .then((res) => res.json())
  .then((res) => res.data)
  .catch((err) => console.log(err));
}

const Instagram = () => {
  const [ig_posts, set_ig_posts] = useState();

  useEffect(() => {
    fetch_ig_posts()
    .then((res) => {
      set_ig_posts(res)
    })
  }, [set_ig_posts])


  return (
    <div>
      {console.log(ig_posts)}
      Instagram
    </div>
  )
}

export default Instagram;