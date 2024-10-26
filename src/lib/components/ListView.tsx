import React from "react";
import './ListView.css';
import { useNavigate } from "react-router-dom";

export default function ListView({ columns, data, isDarkMode, path }: { columns: string[], data: Record<string, any>[], isDarkMode: boolean, path: string }) {
    const navigate = useNavigate();

    const header = (
        <thead>
            <tr className={`list-view-header ${isDarkMode ? 'dark' : 'light'}`}>
                {columns.map((column) => (
                    <th key={column}>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
                ))}
            </tr>
        </thead>
    );

    const rows = (
        <tbody>
            {data.map((item, index) => (
                <tr 
                    key={index} 
                    className={`list-view-item ${isDarkMode ? 'dark' : 'light'}`} 
                    onClick={() => navigate(`${path}/${item.id}`)} 
                    style={{ cursor: 'pointer' }}
                >
                    {columns.map((column) => (
                        <td key={column}>{item[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    return (
        <table className={`list-view ${isDarkMode ? 'dark' : 'light'}`}>
            {header}
            {rows}
        </table>
    );
}
