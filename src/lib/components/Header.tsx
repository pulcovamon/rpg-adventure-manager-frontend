import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Header({ isDarkMode, toggleDarkMode } : { isDarkMode: boolean, toggleDarkMode: Function}) {

    return (
        <header className={`header ${isDarkMode ? "header-dark" : "header-light"}`}>
            <h4 style={{ margin: 0 }}>RPG Manager</h4> {/* margin: 0 pro odstranění defaultního marginu */}
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={(checked) => toggleDarkMode(checked)}
                size={20}
                style={{ marginLeft: 'auto' }} // Margin-left auto, aby se posunul doprava
            />
        </header>
    );
}
