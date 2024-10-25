import bgShadow from '../assets/bg-shadow.png'


function NewsLetter () {

    return <section className="md:w-10/12 mx-auto border-2 border-white p-6 rounded-xl backdrop-blur-sm" >
        <div className="text-center bg-no-repeat bg-cover rounded-xl border shadow-sm space-y-5 py-28" style={{ backgroundImage: `url(${bgShadow})` }}>
            <h2 className='text-4xl font-extrabold'>Subscribe to our Newsletter</h2>
            <p className='text-xl font-bold text-gray-500'>Get the latest updates and news right in your inbox!</p>
            <div className=''>
                <input className='border rounded-xl px-4 py-3 md:w-96' type="email" placeholder="Enter your email"/>
                <button className='bg-[linear-gradient(to_right,#c66e9c,#e5788b,#f78c76,#f8a765,#ebc560)] font-extrabold px-6 py-3 rounded-xl ml-5 max-sm:mt-5'>Subscribe</button>
            </div>
        </div>
    </section>
}

export default NewsLetter;