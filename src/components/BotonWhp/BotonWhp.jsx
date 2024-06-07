import React from 'react'
import { Button } from './BotonWhpStyles';
import { FaWhatsapp } from "react-icons/fa";

const BotonWhp = () => {

    const openWhatsApp = () => {
        window.open('https://wa.me/tunumerodeWhatsApp', '_blank');
    };

    return (
        <Button onClick={openWhatsApp}>
            <FaWhatsapp/>
        </Button>
    );
};

export default BotonWhp