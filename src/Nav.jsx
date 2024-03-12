import React from 'react';
export default function Nav() {
    return (
        <>
            <nav>
                <span class="logo"><i class='bx bxl-medium'></i></span>
                <button class="btn-menu"><i class='bx bx-menu'></i></button>
                <ul class="menu-options">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <div>
                        <button class="switch" id="switch">
                            <span><i class="bx bxs-sun"></i></span>
                            <span><i class="bx bxs-moon"></i></span>
                        </button>
                    </div>
                </ul>
            </nav>
        </>
    )
}