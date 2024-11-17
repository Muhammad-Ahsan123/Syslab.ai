'use client'
import React from 'react'
import Image from 'next/image'
import syslabLogo from '../../../public/logosyslab.svg'

function Header() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 80px', width: '100%', position: 'absolute' }}>
                <Image src={syslabLogo} alt="Syslab Logo" width={200} height={50} />
                <div style={{ display: 'flex', gap: '40px', color: '#212529' , fontWeight : '600' }}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Products</p>
                    <p>Awards & Partners</p>
                    <p>Contact</p>
                </div>
            </div>
        </>
    )
}

export default Header
