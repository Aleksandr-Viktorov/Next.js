import React from 'react';
import { ABOUT_PATH, REVIEWS_PATH, ROOT_PATH, TEXT_COMMON } from '../constants';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="font-bold font-orbitron">
          <NavLink href={ROOT_PATH} prefetch={true}>
            {TEXT_COMMON.INDIE}
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href={REVIEWS_PATH} prefetch={false}>
            {TEXT_COMMON.REVIEWS}
          </NavLink>
        </li>
        <li>
          <NavLink href={ABOUT_PATH} prefetch={false}>
            {TEXT_COMMON.ABOUT}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
