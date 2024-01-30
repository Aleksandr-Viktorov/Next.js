import React from 'react';
import type { FC } from 'react';
import Heading from '../../components/Heading';

export const metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <>
      <Heading>About</Heading>
      <p>Reviews</p>
    </>
  );
};

export default AboutPage;
