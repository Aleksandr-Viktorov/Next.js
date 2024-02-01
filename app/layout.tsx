import React from 'react';
import './global.css';
import NavBar from '../components/NavBar';
import { exo2, orbitron } from './fonts';
import { TEXT_COMMON } from '../constants';

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-3 py-2">
        <header className="border-b pb-2">
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          {TEXT_COMMON.FOOTER_TEXT.DISCLAIMER}{' '}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            {TEXT_COMMON.FOOTER_TEXT.LINK}
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
