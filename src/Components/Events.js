import '../CSS/App.css';
import '../CSS/Events.css';
import cyber1 from '../Data/img/cyber1.jpg'
import startup from '../Data/img/startup.jpeg'
import RoboTech from "../Data/img/Robotech.jpg";
import integrationAI from "../Data/img/integrationAI.jpeg";
import ShakeItUp from "../Data/img/ShakeItUp.jpg";


function Events() {

  const upcomingEvents = [
    {
      title: 'StartUp City',
      timeAndPlace: 'May 24 2024',
      description: '“StartUp City” is the place where students and young people can develop their business ideas, presenting them in front of a prestigious jury. This competition aims to help all innovative young people with an entrepreneurial spirit to realize and present their business ideas. “Start Up City” adds value to the entrepreneurial ecosystem by helping startups grow and position themselves in the market.',
      image: startup
    },
    {
      title: 'Hackathon',
      timeAndPlace: 'May 2024',
      description: 'A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program',
      image: cyber1
    }
  ]

  const pastEvents = [
    {
      title: 'Shake It Up:',
      description: 'Shake It Up: Vocational course dedicated to earthquake engineering is launching soon.',
      image: ShakeItUp
    },
    {
      title: 'RoboTech',
      description: 'Unique opportunity for students passionate about robotics and coding / "RoboTech" begins, organized by Tirana Metropolitan University and COD',
      image: RoboTech
    },
    {
      title: 'INTEGRATION OF ARTIFICIAL INTELLIGENCE',
      description: 'INTEGRATION OF ARTIFICIAL INTELLIGENCE IN THE EMPLOYMENT SECTOR – A THREAT OR A TECHNOLOGICAL REVOLUTION?',
      image: integrationAI
    }
  ]

  const upcomingEventsList = upcomingEvents.map((event) =>
    <div className='upcoming-event'>
      <img src={event.image} className='upcoming-event-image' alt='upcoming event' />
      <div className="upcoming-event-info">
        <h3>{event.title}</h3>
        <p>{event.timeAndPlace}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );

  const pastEventsList = pastEvents.map((event) =>
    <div className='past-event'>
      <img src={event.image} className='past-event-image' alt='past event' />
      <div className='past-event-info'>
        <h3 class="past-event-title">{event.title}</h3>
        <p className='past-event-description'>{event.description}</p>
      </div>
    </div>
  );

  return (
    <div className='event-page'>
      <div className='calendar-section'>
        <h1 className='event-headers'>Upcoming Events</h1>
        <div align="center">
          <iframe title='calendar' className="calendar" src="https://calendar.google.com/calendar/u/0/embed?src=info@umt.edu.al" />
        </div>
      </div>

      <div className='upcoming-events-section'>
        <div className='upcoming-events'>
          {upcomingEventsList}
        </div>
      </div>

      <div className='past-events-section'>
        <h2 className='event-headers'>Event History</h2>
        <div className='past-events'>
          {pastEventsList}
        </div>
      </div>

    </div>
  );
}

export default Events;