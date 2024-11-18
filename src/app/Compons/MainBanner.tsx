// 'use client'
// import React from 'react'
// import mainBannerRigthImage from '../../../public/hexagon_hero-section_1-removebg-preview.png'
// import Image from 'next/image'
// function MainBanner() {
//     return (
//         <>
//             <div style={{
//                 display: 'flex', padding: '0 8vw', backgroundImage: 'url(https://syslab.ai/assets/images/slider-left-dec.png)', height: '100vh', backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'contain'
//             }}>
//                 <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                     <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#212529' }}>
//                         Syslab.ai
//                     </h2>
//                     <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
//                         Expertise in Data Engineering
//                     </h4>
//                     <p style={{ fontSize: '17px', fontWeight: '600', lineHeight: '30px', color: '#212529' }}>
//                         SYSLAB.AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI) solutions. Our motto is that technology and innovation should be explored to develop efficient and effective solutions. With a team of dedicated and talented professionals, developers, and scientists, we strive to deliver efficient solutions to B2B as well as B2C market. Inspired by the emerging technologies such as Deep Learning, Natural Language Processing, Computer Vision, Generative AI, IoTs, and Blockchain, we are developing and enriching solutions that can be beneficial for the industry. For details, please feel free to send us a query at info at syslab.com
//                     </p>
//                 </div>
//                 <div style={{ margin: 'auto' }}>
//                     <Image src={mainBannerRigthImage} alt="" />
//                 </div>
//             </div >
//         </>
//     )
// }

// export default MainBanner



'use client'
import React from 'react'
import mainBannerRigthImage from '../../../public/hexagon_hero-section_1-removebg-preview.png'
import Image from 'next/image'

function MainBanner() {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 bg-[url('https://syslab.ai/assets/images/slider-left-dec.png')] bg-no-repeat bg-contain h-screen">
                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold text-[#212529]">Syslab.ai</h2>
                    <h4 className="text-lg font-medium">Expertise in Data Engineering</h4>
                    <p className="text-base font-semibold leading-7 text-[#212529]">
                        SYSLAB.AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI) solutions.
                        Our motto is that technology and innovation should be explored to develop efficient and effective solutions.
                        With a team of dedicated and talented professionals, developers, and scientists, we strive to deliver efficient solutions to B2B as well as B2C market.
                        Inspired by the emerging technologies such as Deep Learning, Natural Language Processing, Computer Vision, Generative AI, IoTs, and Blockchain,
                        we are developing and enriching solutions that can be beneficial for the industry.
                        For details, please feel free to send us a query at info at syslab.com
                    </p>
                </div>
                {/* Right Image */}
                <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    <Image src={mainBannerRigthImage} alt="Banner Image" className="max-w-full h-auto" />
                </div>
            </div>
        </>
    )
}

export default MainBanner
