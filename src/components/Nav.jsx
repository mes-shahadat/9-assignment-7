
import logo from '../assets/logo.png';

function Nav({ money }) {


    return <>
        <div className='w-full backdrop-blur-sm bg-[#ffffffcc] fixed top-0 z-[1]'>
            <div className="navbar md:w-10/12 mx-auto my-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img className='h-14' src={logo} alt="logo" /></a>
                </div>
                <div className="flex-none max-md:hidden">
                    <ul className="px-1 flex gap-8 items-center">
                        <li className='text-gray-500'>Home</li>
                        <li className='text-gray-500'>Fixture</li>
                        <li className='text-gray-500'>Teams</li>
                        <li className='text-gray-500'>Schedules</li>
                        <li className='border-gray-100 border-2 rounded-xl inline-flex flex-row items-center p-2'>{money} Coin <i className="fa-light fa-coin text-xl text-gold px-2"></i></li>
                    </ul>
                </div>

                <div className="flex-none md:hidden ">
                    <ul className=" menu-horizontal px-1 inline-flex items-center gap-3">
                        <li>
                            <details>
                                <summary>Links</summary>
                                <ul className="rounded-t-none p-2 space-y-1">
                                    <li className='text-gray-500'>Home</li>
                                    <li className='text-gray-500'>Fixture</li>
                                    <li className='text-gray-500'>Teams</li>
                                    <li className='text-gray-500'>Schedules</li>
                                </ul>
                            </details>
                        </li>
                        <li className='border-gray-100 border-2 rounded-xl inline-flex flex-row items-center p-2'>{money} Coin <i className="fa-light fa-coin text-xl text-gold px-2"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Nav;