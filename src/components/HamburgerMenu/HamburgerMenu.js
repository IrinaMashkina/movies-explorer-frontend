import React from "react";
import PopupMenu from "../PopupMenu/PopupMenu";

function HamburgerMenu() {


    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = React.useState(false);

    function handleToggleHamburgerMenu() {
      setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
    }
  

    
    return (
        <>
      { !hamburgerMenuIsOpen && (
        <button  onClick={handleToggleHamburgerMenu} className="hamburger-menu" type="button">
          <div className="hamburger-menu-line"></div>
        </button>)
     }


     {hamburgerMenuIsOpen && (
         <PopupMenu toggleMenu={handleToggleHamburgerMenu} isOpen={hamburgerMenuIsOpen}/>
     )}
     </>
    )
}

export default HamburgerMenu;