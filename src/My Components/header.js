import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar a');
    const selector = document.querySelector('.selector');

    function moveSelector(element) {
      const rect = element.getBoundingClientRect();
      selector.style.width = `${rect.width}px`;
      selector.style.left = `${element.offsetLeft}px`;
    }

    const selectedLink = document.querySelector('.navbar a.selected');
    moveSelector(selectedLink);

    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        navLinks.forEach((link) => link.classList.remove('selected'));
        this.classList.add('selected');
        moveSelector(this);
      });
    });

    window.addEventListener('resize', () => {
      const currentSelected = document.querySelector('.navbar a.selected');
      moveSelector(currentSelected);
    });
  }, []);

  return (
    <div className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="selector"></div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <a href="#home" className="selected">Core</a>
      <a href="#services">Technical Team</a>
      <a href="#about">Social Media Team</a>
      <a href="#contact">Management Team</a>
    </div>
  );
};

export default Navbar;
