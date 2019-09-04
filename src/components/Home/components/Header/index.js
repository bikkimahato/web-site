import React from 'react'
import './index.css'

const Header = () => {
    let myIndex = 0;

    // (function carousel() {
    //     let i;
    //     let x = document.getElementsByClassName("collection");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     myIndex++;
    //     if (myIndex > x.length) { myIndex = 1 }
    //     x[myIndex - 1].style.display ="block";
    //     setTimeout(carousel, 2000);
    // })()
    return (
        <div className="image-slideshow">
            <img className="collection" src="./gwl0.png" ></img>
            <img className="collection" src="./gwl1.png" ></img>
            <img className="collection" src="./gwl2.jpg" ></img>
            <img className="collection" src="./gwl3.png" ></img>
            <img className="collection" src="./gwl4.jpg" ></img>
        </div>
    )
}
export default Header
