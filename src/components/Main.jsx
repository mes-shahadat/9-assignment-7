import { useState } from "react";
import AvailablePlayers from "./AvailablePlayer";
import MainHeader from "./MainHeader";
import SelectedPlayers from "./SelectedPlayers";
import { toast } from 'react-toastify';



function Main({ money, onDecreaseMoney }) {

    const [firstActive, setFirstActive] = useState(true);
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [playerCount, setPlayerCount] = useState(0);

    const onActive = (bool = true) => {
        setFirstActive(bool)
    }

    const onChoose = (player) => {

        const { player_id, name, bidding_price } = player;

        if (money >= bidding_price) {

            let found = selectedPlayers.find(player => player.player_id === player_id);

            if (playerCount < 6) {

                if (found) {
                    toast.warn(`Player already selected`, {
                        position: "top-right"
                    });
                    return
                }

                setPlayerCount(playerCount + 1);
                setSelectedPlayers([...selectedPlayers, player]);
                onDecreaseMoney(bidding_price);
                toast.success(`Congrates !! ${name} is now in you squad`, {
                    position: "top-right"
                });
            }
            else {
                toast.error('player limit reached');
            }

        }
        else {
            toast.error('Not engough money to buy this player. Claim some Credit');
        }
    }

    const onRemove = (player_id) => {
        
        let filterPlayers = selectedPlayers.filter(
            player => player.player_id !== player_id
        )
        setSelectedPlayers(filterPlayers);
        setPlayerCount(playerCount - 1);
        toast.warn(`Player removed`, {
            position: "top-right"
        });
    }

    return <main className="w-10/12 mx-auto relative">
        <MainHeader onActive={onActive} firstActive={firstActive} playerCount={playerCount} />
        {firstActive ? <AvailablePlayers onChoose={onChoose} players={players} setPlayers={setPlayers} /> : <SelectedPlayers playerCount={playerCount} setFirstActive={setFirstActive} selectedPlayers={selectedPlayers} onRemove={onRemove} />}

    </main>
}

export default Main;