import React from 'react';
import './AboutMe.scss';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import information from '../../constants/information-jose';
import Services from '../../components/services-offered/Services';

export default function AboutMe() {
  const [state, setState] = React.useState({
    open: false,
    vertical: '',
    horizontal: '',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <main
      className="aboutme"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="aboutme__info">

        <p className="profession">
          {information.personal.profession}
        </p>
        <p className="name">
          Hi, I'm
          <b>
            <br />
            {information.personal.name}
          </b>
        </p>
        {information.sumary.info.map((info) => <p className="info">{info}</p>)}

        <button
          type="button"
          className="btn btn--blue"
          onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
        >
          Download CV
        </button>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message="✅ Downloaded successfully"
          key={vertical + horizontal}
        />
        <Link to="/contact" type="button" className="btn">
          Contact
        </Link>

      </section>

      <section className="services">
        <div className="image">
          <img
            src={information.personal.photoCoverURL}
            alt={information.personal.name}
          />
        </div>
        <h3>What I do</h3>
        <Services />
      </section>

    </main>
  );
}
