"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';

const aboutPage = () => {
    const router = useRouter();
    const isLoggedin = true;
    const handleNavigation = () => {
        if(isLoggedin){
            router.push("/about/address")
        }
        else{
            router.push("/")
        }
    }
    return (
        <div>
            <p className='font-bold text-3xl'>About Page</p>
            <Link href="/about/address">Address</Link>
            <button type='button' onClick={handleNavigation}>Address</button>
        </div>
    );
};

export default aboutPage;