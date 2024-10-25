import footerLogo from '../assets/logo-footer.png'

function Footer() {

    return <footer className='bg-black text-white space-y-10 pt-96 md:pt-72 pb-10 mt-64'>
        <img className='mx-auto' src={footerLogo} alt="" />
        <section className='w-10/12 mx-auto flex max-sm:flex-col justify-between gap-4'>

            <div className='space-y-3'>
                <h3 className='text-lg font-semibold'>About Us</h3>
                <p className='text-gray-300 w-[25ch]'>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>

            <div className='flex flex-col space-y-2'>
                <h3 className='text-lg font-semibold'>Quick Links</h3>
                <a className='text-gray-300'>Services</a>
                <a className='text-gray-300'>About</a>
                <a className='text-gray-300'>Home</a>
                <a className='text-gray-300'>Contact</a>
            </div>

            <div>
                <h3 className='text-lg font-semibold'>Subscribe</h3>
                <p className='text-gray-300 w-[25ch]'>Subscribe to our newsletter for the latest updates.</p>
                <div className='space-y-3 '>
                    <input className='border rounded-l-lg px-4 py-3 w-6/12 lg:w-60' type="email" placeholder="Enter your email" />
                    <button className='bg-[linear-gradient(to_right,#c66e9c,#e5788b,#f78c76,#f8a765,#ebc560)] font-extrabold px-6 py-3 border rounded-r-lg'>Subscribe</button>
                </div>
            </div>
        </section>

        <hr className='border-gray-600' />

        <p className='text-gray-300 text-center'>@2024 Your Company All Rights Reserved.</p>
    </footer>
}

export default Footer;