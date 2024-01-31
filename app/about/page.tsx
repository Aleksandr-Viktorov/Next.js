import React from 'react';
import Heading from '../../components/Heading';
import { TEXT_COMMON } from '../../constants';

export const metadata = { title: 'About' };

const AboutPage = () => {
  return (
    <>
      <Heading children="About" />
      <p>{TEXT_COMMON.ABOUT_PAGE}</p>
    </>
  );
};

export default AboutPage;
