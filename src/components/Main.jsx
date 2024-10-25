import { useState } from "react";
import AvailablePlayers from "./AvailablePlayer";
import MainHeader from "./MainHeader";
import SelectedPlayers from "./SelectedPlayers";



function Main() {

    const [firstActive, setFirstActive] = useState(true);

    const onActive = (bool = true) => {
        setFirstActive(bool)
    }


    return <main className="w-10/12 mx-auto relative">
        <MainHeader onActive={onActive} firstActive={firstActive} />
        {firstActive ? <AvailablePlayers  /> : <SelectedPlayers setFirstActive={setFirstActive} />}

    </main>
}

export default Main;