import React from 'react';
import emp from '../src/assets/emp.png';
export default function Header() {
    return (
        <>
            <header>
                <div class="header__info">
                    <div class="info">
                        <div class="info__childs">
                            <p class="hello">Hola</p>
                            <h1>Soy Juan Gabriel</h1>
                            <p class="descripcion">Freelance web Designer & <br/> Mobile UI Designer</p>
                            <button>Conoce más sobre mi!</button>
                        </div>
                    </div>
                </div>
                <div class="y-container"></div>
                <img class="foto" src={emp} alt="empresario"></img>
            </header>
        </>
    )
}