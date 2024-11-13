
import React, { useState } from 'react';
import '../../app/globals.css';

type ProductProps = {
    imageSrc: string;
    title: string;
    hoverImageSrc: string;
    content: string;
    classname: string;
};

function Product({ imageSrc, title, content, classname, hoverImageSrc }: ProductProps) {
    const [image, setImage] = useState(imageSrc);

    const handleMouseEnter = () => {
        setImage(hoverImageSrc);
    };

    const handleMouseLeave = () => {
        setImage(imageSrc);
    };

    return (
        <div
            style={{
                padding: '2vw',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '20px',
                width: '700px',
                margin: '1vw 0',
            }}
            className={`onHoverProduct`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} alt={title} className={`onHoverImage ${classname}`} />
            <h2 style={{ paddingTop: '1.4vw' }}>{title}</h2>
            <p style={{ padding: '1.4vw 0' }}>{content}</p>
            <p>Visit {title}</p>
        </div>
    );
}

export default Product;
