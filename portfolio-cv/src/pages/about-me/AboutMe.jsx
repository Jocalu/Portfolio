import React from 'react';
import './AboutMe.scss';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import { Fade, Slide } from '@material-ui/core';
import information from '../../constants/information-jose';
import Recommendations from '../../components/recommendations/Recommendations';
import Services from '../../components/services-offered/Services';

function SlideTransition(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide {...props} direction="up" />;
}

export default function AboutMe() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <main
      className="aboutme"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="aboutme__info-container">
        <div className="aboutme__info">
          <p className="profession">
            {information.personal.profession}
          </p>
          <p className="name">
            Hi, I'm
            {' '}
            <b>
              {information.personal.name}
              .
            </b>
          </p>

          <p className="info">{information.sumary.info[0]}</p>
          <p className="info">{information.sumary.info[1]}</p>
          <p className="info">{information.sumary.info[2]}</p>
          <button type="button" className="btn btn--blue" onClick={handleClick(SlideTransition)}>Download CV</button>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="I love snacks"
            key={state.Transition.name}
          />
          <Link to="/contact" type="button" className="btn">
            Contact
          </Link>

        </div>

        <div className="image">
          <img
            src={information.personal.photoCoverURL}
            alt={information.personal.name}
          />
        </div>

      </section>

      <section>
        <div className="services">

          <h3>What I do</h3>
          <Services />
        </div>

        <div className="recommendations">
          <h3>Recommendations</h3>
          <Recommendations person={information.recommendations.diana} />
          <Recommendations person={information.recommendations.alvaro} />
        </div>

      </section>
    </main>
  );
}
