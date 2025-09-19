'use client';

import React from 'react';
import Carousel from "../components/Carousel";
import Generate from "../components/Generate";
import Gallery from "../components/Gallery";
import "../app/globals.css";

export default function Main({ darkMode }: { darkMode?: boolean }) {
  return (
    <div className="p-4  ">
        <Carousel isDarkMode={darkMode} />
        <Generate isDarkMode={darkMode}/>
        <Gallery isDarkMode={darkMode}/>

    </div>
  );
}