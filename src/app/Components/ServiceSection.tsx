'use client'
import Image from 'next/image'
import React from 'react'
import headingLine from '../../../public/heading-line-dec.png'
import Product from './Product'
function ServiceSection() {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ top: '0%', right: '0%', position: 'relative' }} src="https://syslab.ai/assets/images/services-right-dec.png" alt="" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', width: '65%' }}>
                    <p>
                        Our Products
                    </p>
                    <Image src={headingLine} alt="" />
                    <p>
                        We offer a wide range of products that are designed to meet the needs of our clients and customers
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '0 4vw', gap: '2%', flexWrap: 'wrap' }}>
                <Product
                    hoverImageSrc="https://syslab.ai/assets/images/service-icon-hover-02.png"
                    classname='first'
                    imageSrc={"https://syslab.ai/assets/images/service-icon-02.png"}
                    title={"ProctorParhai"} content={"This innovative app utilizing AI for online proctoring. ProctorParhai ensures exam integrity by confirming candidate identity, monitoring focus, detecting unauthorized materials, and preventing external assistance."} />
                <Product
                    hoverImageSrc="https://syslab.ai/assets/images/service-icon-hover-03.png"
                    classname='second'
                    imageSrc={"https://syslab.ai/assets/images/service-icon-03.png"}
                    title={"iParhai"} content={"This product is developed to meet the growing needs of online education. It provides an adaptive and adaptable solution to deliver contents according to the specific needs of a learner. It is being adopted by various schools."} />
            </div>
            <div style={{ display: 'flex', padding: '0 4vw', gap: '2%', flexWrap: 'wrap' }}>
                <Product
                    hoverImageSrc='https://syslab.ai/assets/images/service-icon-hover-04.png'
                    classname='third'
                    imageSrc={"https://syslab.ai/assets/images/service-icon-04.png"} title={"Eyecon"} content={"This project is focused on detecting mixed critical events using computer vision. In that, mixed criticality is determined using context-aware based system. Using state-of-the-art technology such as Vision Transformers and Visual Language Models the project automatically determines different types of criticalities in a smart city using real-time. "} />
                <Product
                    hoverImageSrc='https://syslab.ai/assets/images/service-icon-hover-04.png'
                    classname='fourth'
                    imageSrc={"https://syslab.ai/assets/images/service-icon-04.png"} title={"PatientCare"} content={"Through state of the art integration of IoT and AI, we are working on scalable and intelligent Patient care solutions. The product to market will be launched soon "} />
            </div>
        </div>
    )
}

export default ServiceSection
