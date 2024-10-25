import Nav from "./Nav";
import bannerMain from '../assets/banner-main.png'
import bgShadow from '../assets/bg-shadow.png'

function Header({ money, onClaim }) {


    return <header>
        <Nav money={money} />
        <div className="w-10/12 mx-auto text-center bg-black bg-no-repeat bg-cover text-white space-y-6 px-1 py-16 rounded-xl mt-32 mb-10" style={{ backgroundImage: `url(${bgShadow})` }}>
            <img className="mx-auto" src={bannerMain} alt="banner image" />
            <h1 className="text-4xl font-extrabold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-xl font-semibold text-gray-300">Beyond Boundaries Beyond Limits</p>
            <button className="border border-[#e7fc4b] p-1 rounded-xl hover:bg-[#e7fc4b]" onClick={onClaim}><span className="btn bg-[#e7fc4b] font-extrabold rounded-xl px-8">Claim Free Credit</span></button>
        </div>
    </header>
}

export default Header;