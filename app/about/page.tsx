import React from 'react';
import Heading from '../../components/Heading';
import { TEXT_COMMON } from '../../constants';

const AboutPage = () => {
  return (
    <>
      <Heading>{TEXT_COMMON.ABOUT}</Heading>
      <p>{TEXT_COMMON.ABOUT_PAGE}</p>
    </>
  );
};

export default AboutPage;
