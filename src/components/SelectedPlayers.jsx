
function SelectedPlayers({ playerCount, setFirstActive, selectedPlayers, onRemove }) {

    return <>
        <h2 className="text-3xl font-extrabold md:absolute top-0 py-4">Selected Player ({playerCount}/6)</h2>

        <section className="my-10 space-y-4">
            {
                
                selectedPlayers.map(player => <div key={player.player_id} className="flex items-center justify-between border border-gray-300 rounded-xl p-4">
                    <div className="inline-flex items-center gap-4">
                        <img className="w-16 h-16 object-cover rounded-xl" src={player.image} alt="" />
                        <div>
                            <p className="text-xl font-bold">{player.name}</p>
                            <p>{player.batting_type}</p>
                        </div>
                    </div>
                    <button onClick={()=>onRemove(player.player_id)}><i className="fa-solid fa-trash-can text-xl text-red-600"></i></button>
                </div>)
            }
            
        </section>
        <button className="border border-[#e7fc4b] p-1 rounded-xl hover:bg-[#e7fc4b]" onClick={()=> setFirstActive(true)}><span className="btn bg-[#e7fc4b] font-extrabold rounded-xl px-8">Add More Player</span></button>
    </>
}

export default SelectedPlayers;