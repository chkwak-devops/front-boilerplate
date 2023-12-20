import { useEffect, useState, useRef, useMemo, useCallback, forwardRef } from "react";

import {
    Icon, Image
} from "semantic-ui-react";

const ImagePage = () => {


    const DEFAULT_IMG_URL = "/images/emart_logi";

    const imageArray = [
        "/images/photo-1446308386271-523272773b92.jpeg",
        "/images/photo-1496692052106-d37cb66ab80c.jpeg",
        "/images/photo-1510798831971-661eb04b3739.jpeg",
        "/images/photo-1517157342575-5a9a7661d619.jpeg",
        "/images/photo-1525328185020-b50a73fe2eb8.jpeg",
    ]

    const [time, setTime] = useState(new Date());

    const [imgUrl, setImgUrl] = useState(DEFAULT_IMG_URL);

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);

    useEffect(() => {
        const id = setInterval(() => {
            const rand1 = Math.round(Math.random() * 4);
            console.log(imageArray[rand1]);
            setImgUrl(imageArray[rand1]);

        }, 5000);
        return (() => clearInterval(id))
    }, []);


    useEffect(() => {
    }, []);

    return (
        <>

            <div>
                <div>
                    <span>{time.toLocaleTimeString()}</span>
                </div>

                <div style={{ span: 20 }}>

                    <Image src={imgUrl} size='large' />
                </div>

            </div>

        </>
    );
};

export default ImagePage;




ImagePage.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};
