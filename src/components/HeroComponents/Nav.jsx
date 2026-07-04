import { BiAward, BiBriefcase, BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { Link } from 'react-scroll';

const Nav = () => {

    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full  overflow-hidden z-50'>
            <div className='mx-auto container '>
                <div className='w-full bg-black/1  h-[96px] backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-4 flex justify-between items-center text-2xl text-white/50'>
                    <Link to='home' smooth={true} spy={true} offset={-200} className=' cursor-pointer w-[70px] h-[70px] flex items-center justify-center hover:bg-primary hover:rounded-full  hover:text-ternary '>
                        <BiHomeAlt />
                    </Link>
                    <Link to='about' smooth={true} spy={true} className=' cursor-pointer w-[70px] h-[70px] flex items-center justify-center hover:bg-primary hover:rounded-full  hover:text-ternary'>
                        <BiUser />
                    </Link>
                    <Link to='skill' smooth={true} spy={true} className=' cursor-pointer w-[70px] h-[70px] flex items-center justify-center hover:bg-primary hover:rounded-full  hover:text-ternary'>
                        < BiAward />
                    </Link>
                    <Link to='education' smooth={true} spy={true} className=' cursor-pointer w-[70px] h-[70px] flex items-center justify-center hover:bg-primary hover:rounded-full hover:text-ternary '>
                        < BiClipboard />
                    </Link>
                    <Link to='work' smooth={true} spy={true} className=' cursor-pointer w-[70px] h-[70px] flex items-center justify-center hover:bg-primary hover:rounded-full  hover:text-ternary'>
                        < BiBriefcase />
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Nav