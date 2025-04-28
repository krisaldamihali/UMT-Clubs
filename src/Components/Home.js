import "../CSS/Home.css";
import umtMap from '../Data/img/umtMap.jpeg'
import umtlogo from '../Data/img/umtlogo.png'
import Footer from './Footer.js'
import { InstagramEmbed } from 'react-social-media-embed';

function HomePage() {

  const meetingInfo = (
    <div className="meetingsSection">
      <div className="meetingsInfoSection">
        <h2 className="sweccMeetings">UMT Meetings</h2>
        <p className="meetingInfo">
        Student clubs in the field of technology include several categories such as: Web/App/Game Development, AI and Cybersecurity.
        </p>
        <h3 className="meetingTime">Meeting Times/Location </h3>
        <p className="meetingDetails">
        Each category has different meeting times during the week in the university building or in the Pyramid of Tirana.
          <br />
         
        </p>
      </div>
      <div className="map-and-label">
        <img className="map" src={umtMap} alt="map" />
        
      </div>
    </div>
  )

  const posts = (
    <div className="posts">
      <InstagramEmbed className="instaPost slide-up" url="https://www.instagram.com/p/C5I-KmeNbaZ/" />
      <InstagramEmbed className="instaPost slide-up" url="https://www.instagram.com/p/C4sHYTkOeTC/" />
      <InstagramEmbed className="instaPost slide-up" url="https://www.instagram.com/p/C4sxxr_N1Vv/" />
    </div>
  )

  return (
    <div className="homepage">
      <div className="clubTitleSection">
        <img className="umtlogo" src={umtlogo} alt="UMT logo" />
        <h1 className="clubName">Student clubs</h1>
      </div>
      <div className="whatWeDoSection">
        <h2 className="summaryTitle">What we do</h2>
        <p className="summary">
        Student clubs at Metropolitan University Tirana are created by the students themselves. 
        They learn, interact with each other, and exchange ideas. 
        These clubs focus on developing their ideas in the field of technology.

        </p>
      </div>
      {meetingInfo}
      {posts}
      <Footer />
    </div>
  );
};

export default HomePage;


