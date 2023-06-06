import Honeymoon from "../Honeymoon";
import { useRef } from 'react';
import './index.css'

const Homepage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>

      <div className="wedding-invitation-wrapper">
        <div>
          <h1 className="wedding-title">Bishesh Weds Anjila</h1>
        </div>
        <div className="image-button-wrapper">
          <div className="wrap">
            <button onClick={ handleClick } className="button">Click me please</button>
          </div>
          <div>
            <img style={{ borderRadius: 8, marginTop: 16 }} src="images/wedding-invitation.png"  alt="reception invite" />
          </div>
          <div className="wrap">
            <button onClick={ handleClick } className="button">Click me please</button>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <Honeymoon />
      </div>
    </div>
  )
};
export default Homepage;
