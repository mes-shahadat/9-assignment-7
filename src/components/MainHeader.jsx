
function MainHeader({ onActive, firstActive, playerCount }) {

    return <>

        <div className="w-max max-sm:mx-auto md:ml-auto border border-gray-200 rounded-lg sticky top-[95px] md:top-[80px] md:z-[2]">
            <button className={`${firstActive ? `bg-[#e7fc4b] font-bold` : `bg-white`} rounded-l-lg px-4 py-3`} onClick={() => onActive(true)}>Available</button>
            <button className={`${!firstActive ? `bg-[#e7fc4b] font-bold` : `bg-white`} rounded-r-lg px-4 py-3`} onClick={() => onActive(false)}>Selected ({playerCount})</button>
        </div>
    </>
}

export default MainHeader;