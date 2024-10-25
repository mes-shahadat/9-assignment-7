import { useEffect, useState } from "react";

function AvailablePlayers({players, setPlayers, onChoose}) {


    useEffect(
        () => {
            fetch("./players.json")
                .then(res => res.json())
                .then(data => setPlayers(data));
        }, []
    )

    return <>
        <h2 className="text-3xl font-extrabold md:absolute top-0 py-4">Available Players</h2>
        <section className="grid md:grid-cols-2 xl:grid-cols-3 min-[2560px]:grid-cols-4 gap-6 my-10">

            {players.map(player => <div key={player.player_id} className="space-y-4 p-6 border border-gray-300 rounded-2xl">
                <img className="h-[250px] w-full object-cover rounded-2xl" src={player.image} alt="" />
                <p className="font-extrabold text-xl inline-flex items-center gap-2"><i className="fa-solid fa-user text-2xl px-1"></i> {player.name}</p>
                <div className="flex justify-between items-center gap-1">
                    <p className="inline-flex items-center gap-2 text-gray-500"><i className="fa-solid fa-flag text-2xl px-1"></i> {player.country}</p>
                    <button className="bg-[#f2f2f2] px-2 xl:px-4 py-1 rounded-lg font-semibold cursor-default">{player.role}</button>
                </div>
                <hr className="y-1" />
                <p className="font-extrabold ">Rating</p>
                <div className="flex justify-between items-center gap-1">
                    <p className="font-extrabold ">{player.batting_type}</p>
                    <p className="text-gray-600 ">{player.bowling_type}</p>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <p className="font-extrabold ">Price: ${player.bidding_price}</p>
                    <button className="border border-gray-300 px-2 xl:px-4 py-1 rounded-lg font-semibold" onClick={()=>onChoose(player)}>Choose player</button>
                </div>
            </div>)}
            
        </section>
    </>
}

export default AvailablePlayers;