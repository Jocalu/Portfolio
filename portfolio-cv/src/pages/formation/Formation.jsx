import React from 'react';
import information from '../../constants/information-jose-EN';
import './Formation.scss';

export default function Formation() {
  return (
    <main
      className="formation"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="experience">
        <h3>{information.menu.page3}</h3>
        {information.experience.map((job) => (
          <div className="container" key={job.place}>
            <div className="data">
              <span className="date">{job.date}</span>
              <p className="place">{job.place}</p>
            </div>
            <h4 className="position">{job.position}</h4>
            {job.description.map((p) => (
              <p className="description" key={p.description}>
                🔹
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className="education">
        <h3>{information.menu.page4}</h3>
        {information.education.map((study) => (
          <div className="container" key={study.studies}>
            <div className="data">
              <span className="date">{study.date}</span>
              <p className="place">{study.place}</p>
            </div>
            <h4 className="position">{study.studies}</h4>
            {study.description.map((p) => (
              <p className="description" key={p.description}>
                🔹
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>

    </main>
  );
}
