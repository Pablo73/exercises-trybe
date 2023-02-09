import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const theme = useContext(ThemeContext);
  return <footer className={theme.color}>Tema Atual: {theme.color}</footer>;
}

export default Footer;
