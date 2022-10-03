import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const RightPanel = () => {
    const displayImages = [
        "Image1.png",
        "Image2.png",
        "Image3.png",
    ];
    const displayHeading = [
        "Lorem Ipsum",
        "Eu Scelerisque",
        "Aliquet Lectus",
    ];
    const displayText = [
        "Sagittis Id Consectetur Purus Ut Faucibus Pulvinar",
        "Sapien Et Ligula Ullamcorper Malesuada Proin Libero",
        "Bibendum Enim Facilisis Gravida Neque Convallis Avec",
    ];
    const [image, imageState] = useState(1);

    return (
        <div className='w-[80%] mx-auto mt-[100px] font-mono'>
            <img src={displayImages[image - 1]} className=' w-[900px] h-[600px] drop-shadow-[0_5px_5px_#000000]'/>
            <div className='flex flex-col text-center'>
                <div className='mt-6 text-[40px] font-bold text-[#EE6C4D]'>{displayHeading[image - 1]}</div>
                <div className='text-[24px] text-[#EE6C4D]'>{displayText[image - 1]}</div>
            </div>
            <div className='flex justify-around w-[10%] mx-auto mt-6'>
                <div onClick={() => imageState(1)} className={image == 1 ? styles.active : styles.notActive}></div>
                <div onClick={() => imageState(2)} className={image == 2 ? styles.active : styles.notActive}></div>
                <div onClick={() => imageState(3)} className={image == 3 ? styles.active : styles.notActive}></div>
            </div>
        </div>
    )
};

export default RightPanel;