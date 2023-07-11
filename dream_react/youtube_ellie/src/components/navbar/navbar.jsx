import React, { memo } from 'react';
import styles from './navbar.module.css'

const Navbar = memo(({getsearch}) => {

    const inputRef = React.createRef();

    const searching = () => {
        const name = inputRef.current.value;
        getsearch(name);
    }

    const onclick = () => {
        searching();
    }

    const onkeypress = (event) => {
        if(event.key ==='Enter'){
            searching();
        }
    }


    return (

        
        <nav className={styles.bar}>
            
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
            </style> 

            <div>
            <img src="logo.png"  ></img>
            </div>

            <span className={styles.logo}>Youtube</span>

            <input className={styles.input} type="search" ref={inputRef} placeholder="  Search.." onKeyPress={onkeypress}  />
            
            <button type="submit" className={styles.click} onClick={onclick}>
                <i className="fa-solid fa-magnifying-glass"></i>    
            </button>

        </nav>
    );
});

export default Navbar;