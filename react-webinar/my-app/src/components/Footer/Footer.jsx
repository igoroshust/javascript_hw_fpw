import React from "react";
import $style from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className={$style.footer}>
                <h4 className={$style.subtitle}>All rights reserved</h4>
            </footer>
        </div>
    );
}

export default Footer;