import logo from './logo.svg';
import { useEffect, useState } from 'react'
import { LeftArrow, RighttArrow } from './Icons';
import { reviews } from './data';

function App() {
  const [active, setActive] = useState(0);
  const { name, msg, designation, image } = reviews[active];

  const handlePrev = () => {
    active === 0 ? setActive(reviews.length - 1) : setActive((c) => c - 1)
  }

  function handleNext() {
    active === reviews.length - 1 ? setActive(0) : setActive((c) => c + 1);
  }

  const handleRandom = () => {
    let random = Math.trunc(Math.random() * reviews.length);
    if (random === active) {
      random = random + 1;
    }
    setActive(random);
  }

  useEffect(() => {
    let slider = setInterval(() => {
      active === reviews.length - 1 ? setActive(0) : setActive((c) => c + 1);
    }, 2000)

    return () => clearInterval(slider)
  }, [active])

  return (
    <>
      <a href='https://www.mrhussain.in/portfolio/' className='back-btn'>Back to Portfolio</a>
      <div className="our-review">
        <h2>Our Reviews</h2>
        <div className='review-box'>
          <img src={image} alt={name} className='user-icon' />
          <h3>{name}</h3>
          <span>{designation}</span>
          <p>{msg}</p>
          <button onClick={handlePrev} className='arrow-btn'>{RighttArrow}</button>
          <button onClick={handleNext} className='arrow-btn'>{LeftArrow}</button>
          <button onClick={handleRandom} className='random-btn'>Surprise me</button>
        </div>
      </div>
    </>

  );
}

export default App;
