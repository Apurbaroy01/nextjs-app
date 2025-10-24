import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex justify-between w-1/2'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/serveces"><li>Sevices</li></Link>
                <Link href="/about"><li>About</li></Link>
                
            </ul>
        </nav>
    );
};

export default Navbar;