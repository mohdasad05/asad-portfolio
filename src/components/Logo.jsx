import React from 'react';

const LogoWithTagStyle = ({ onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className="flex items-center text-xl font-pacifico tracking-wide text-white hover:text-teal-400 transition z-[999]"
  >
    &lt;<span className="mx-1">Mohammad Asad</span>/&gt;
  </a>
);

export default LogoWithTagStyle;
