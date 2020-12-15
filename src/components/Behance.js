import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Inner from './Grid';

const Behance = ({user}) => {
  const [behanceData, setBehanceData ] = useState([])

  const fetchBehanceData = url => axios(url)
    .then(res => res.data)
    .catch(err => console.log(err))


  useEffect(() => {
    const setTheData = async () => {
      let behanceArr = await fetchBehanceData(`https://behance-profile.herokuapp.com/${user}`);
      setBehanceData(behanceArr)
      console.log(behanceData)
    }
    setTheData();
  }, [])

  const BehanceFeed = () => {
    if(behanceData.length >= 1) {
      return (
        <div className="behance">
          {behanceData.map((feed, id) => (
            <div key={id} className="behance__item">
              <img src={feed.image} alt={`showcase of ${feed.title} project`} />
              <h3>{feed.title}</h3>
              <div>
                <span>Views: {feed.views}</span>
                <span>Likes: {feed.likes}</span>
              </div>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          Fetching behance feed...
        </div>
      )
    }
  }

  return (
    <Inner>
      <BehanceFeed/>
    </Inner>
  )
}
export default Behance;