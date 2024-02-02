import React from 'react';
import { ROOT_PATH, TEXT_COMMON } from '../constants';
import NavLink from '../components/NavLink';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="pb-2 text-3xl">{TEXT_COMMON.NOT_FOUD}</h1>
      <div className="font-bold font-orbitron"></div>
      <NavLink href={ROOT_PATH}>{TEXT_COMMON.GO_TO_HOME}</NavLink>
    </div>
  );
};

export default NotFound;
