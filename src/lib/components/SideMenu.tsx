import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GiMedievalPavilion, GiAxeSword, GiCrestedHelmet } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export default function SideMenu({ isDarkMode }: { isDarkMode: boolean }) {
    const iconSize = 30;
    const location = useLocation();

    return (
        <Sidebar style={{ width: 80, minWidth: 80 }}>
            <Menu
                menuItemStyles={{
                    button: (state) => ({
                        backgroundColor: state.active ? (isDarkMode ? '#333333' : '#d1e0f0') : 'transparent',
                        [`&:hover`]: {
                            backgroundColor: isDarkMode ? '#333333' : '#d1e0f0'
                        },
                        width: '100%',
                        height: 80,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: isDarkMode ? '#FFFFFF' : '#000000',
                    }),
                    icon: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
                className={isDarkMode ? "side-menu-dark" : "side-menu-light"}
            >

                <MenuItem
                    component={<Link to="/" />}
                    icon={<FaHome size={iconSize} />}
                    active={location.pathname === "/"}
                />
                <MenuItem
                    component={<Link to="/worlds" />}
                    icon={<TbWorld size={iconSize} />}
                    active={location.pathname.startsWith("/worlds")}
                />
                <MenuItem
                    component={<Link to="/campaigns" />}
                    icon={<GiMedievalPavilion size={iconSize} />}
                    active={location.pathname.startsWith("/campaigns")}
                />
                <MenuItem
                    component={<Link to="/encounters" />}
                    icon={<GiAxeSword size={iconSize} />}
                    active={location.pathname.startsWith("/encounters")}
                />
                <MenuItem
                    component={<Link to="/characters" />}
                    icon={<GiCrestedHelmet size={iconSize} />}
                    active={location.pathname.startsWith("/characters")}
                />
                <MenuItem
                    component={<Link to="/settings" />}
                    icon={<IoMdSettings size={iconSize} />}
                    active={location.pathname.startsWith("/settings")}
                />
                <MenuItem
                    component={<Link to="/account" />}
                    icon={<MdAccountCircle size={iconSize} />}
                    active={location.pathname.startsWith("/account")}
                />
            </Menu>
        </Sidebar>
    );
}
