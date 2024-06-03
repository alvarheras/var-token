import React, { useState, useEffect } from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import realLogo from '../../images/real.png'; 

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon src={realLogo} alt="Real Logo" />
                            $VAR on SOL
                        </NavLogo>
                        <HamburgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </HamburgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks as="a" href='https://dexscreener.com/solana/aeuh2dprc6h4wqm5rzawieeossfavahz3wqx8tsg1qpu' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Dexscreen
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://www.dextools.io/app/en/solana/pair-explorer/AeUH2DPrc6H4wqM5RzawiEEossFavAHZ3Wqx8Tsg1qPu?t=1717391940187' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Dextools
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://x.com/vartokenonsol' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Twitter
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://t.me/varportaltoken' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Telegram
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink as="a" href='https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in&inputMint=sol&outputMint=Hw55pN2xXbRXKGgCCVaGvxfMHFTyyNNKsyiZrSYspump' target="_blank" rel="noopener noreferrer">
                                        <Button primary>BUY NOW</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink as="a" href='/sign-up' target="_blank" rel="noopener noreferrer">
                                        <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>    
        </>
    );
}

export default Navbar;
