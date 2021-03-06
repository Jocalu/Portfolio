import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Recommendations from './Recommendations';
import information from '../../constants/informationEN';

describe('Given a Recommendations component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('recommendations');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a projects-card component', () => {
      const person = information.recommendations.diana;
      act(() => {
        render(<Recommendations person={person} />, container);
      });
      const recommendations = container.querySelector('recommendations');

      expect(recommendations).toBeDefined();
    });
  });
});
