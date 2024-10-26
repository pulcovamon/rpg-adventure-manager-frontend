import React, { useEffect, useState } from "react";
import ListView from "../components/ListView";

export default function Worlds({ isDarkMode }: { isDarkMode: boolean }) {
    interface world {
        id: number,
        name: string,
        description: string,
    }
    const [worlds, setWorlds] = useState<world[]>([]);
    useEffect(() => {
        setWorlds([
            {
                id: 1,
                name: "My first world",
                description: "ngjordn frjsg kdf"
            },
            {
                id: 2,
                name: "Random",
                description: "grs jfvnridkgn frsbed"
            }
        ])
    }, [])
    return (
        <div>
            <ListView
                columns={["name", "description"]}
                data={worlds}
                isDarkMode={isDarkMode}
                path="/worlds" />
        </div>
    )
}