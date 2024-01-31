import { TEXT_COMMON } from '../constants';
import ShareLinkButton from './ShareLinkButton';
import React from 'react';

const ShareButtons = () => {
  return (
    <div>
      <ShareLinkButton /> | [{TEXT_COMMON.TWITTER}] | [{TEXT_COMMON.FACEBOOK}]
    </div>
  );
};

export default ShareButtons;
