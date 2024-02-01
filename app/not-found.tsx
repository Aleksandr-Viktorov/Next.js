import React from 'react';
import Link from 'next/link';
import { TEXT_COMMON } from '../constants';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="pb-2 text-3xl">{TEXT_COMMON.NOT_FOUD}</h1>
      <Link href="/" className="font-bold font-orbitron text-orange-800">
        {TEXT_COMMON.GO_TO_HOME}
      </Link>
    </div>
  );
};

export default NotFound;
