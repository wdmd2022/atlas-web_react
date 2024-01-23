import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer({ className }) {
    return (
      <footer className={className}>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    );
}

export default Footer;
