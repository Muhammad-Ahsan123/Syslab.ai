'use client'
import React from 'react'
import heroSectionImage from '../../../public/section2.png'
import headingLine from '../../../public/heading-line-dec.png'
import Image from 'next/image'
function Section2() {
    return (
        <>
            <div style={{ display: 'flex', padding: '0 8vw', height: '100vh' }}>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: '25px', fontWeight: '700', color: '#212529' }}>
                        Technology Meets <span style={{ color: '#4B8EF1' }}>
                            Innovation
                        </span>
                    </p>
                    <Image src={headingLine} alt="" />
                    <p style={{ fontSize: '18px', color: 'black' }}>
                        We have been working on some of the exciting technologies
                        for research and development. Details of some of the leading
                        research publications are provided here
                    </p>
                </div>
                <div style={{ margin: 'auto' }}>
                    <Image src={heroSectionImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section2
