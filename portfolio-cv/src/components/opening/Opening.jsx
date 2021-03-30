import React from 'react';
import information from '../../constants/information-jose';
import './Opening.scss';

export default function Opening() {
  return (
    <section className="opening">
      <div className="title">
        <div>
          <img src="https://i.postimg.cc/7LPtZ1gG/logo-white.png" alt="logo" />
          <p>{information.personal.name}</p>
        </div>
        <p>{information.personal.profession}</p>
      </div>
    </section>
  );
}
