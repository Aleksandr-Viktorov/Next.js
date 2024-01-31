import React from 'react';
import Link from 'next/link';
import { TEXT_COMMON } from '../constants';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="font-bold font-orbitron text-orange-800 hover:underline"
          >
            {TEXT_COMMON.INDIE}
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className=" text-orange-800 hover:underline">
            {TEXT_COMMON.REVIEWS}
          </Link>
        </li>
        <li>
          <Link href="/about" className=" text-orange-800 hover:underline">
            {TEXT_COMMON.ABOUT}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
