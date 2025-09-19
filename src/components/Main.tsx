'use client';

import React from 'react';
import Carousel from "../components/Carousel";

import "../app/globals.css";


export default function Main({ darkMode }: { darkMode?: boolean }) {
  return (
    <div className="p-4  ">
        <Carousel isDarkMode={darkMode} />
      
    </div>
  );
}