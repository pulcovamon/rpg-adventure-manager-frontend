import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

export default function Layout({ isDarkMode, toggleDarkMode } : { isDarkMode: boolean, toggleDarkMode: Function}) {
  return (
    <div className={`App ${isDarkMode ? "App-dark" : "App-light"}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div style={{ display: 'flex' }}>
                <SideMenu isDarkMode={isDarkMode} />
                <main style={{ flex: 1, padding: '10px' }}>
                    <Outlet />
                </main>
            </div>
    </div>
  );
}