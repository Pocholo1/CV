import React from 'react';
import emp from '../src/assets/emp.jpeg';
export default function Section() {
    return (
        <>
            <main>
                <section>
                    <div class="about-img">
                        <img src={emp} alt=""></img>
                    </div>
                    <article>
                        <h2>Sobre mi</h2>
                        <p>Mi nombre es Juan Gabriel Cataño, soy un apasionado aprendiz del Servicio Nacional de Aprendizaje
                            (SENA) en
                            el programa de Tecnólogo en Análisis y Desarrollo de Software. A lo largo de mi formación en el
                            SENA, he adquirido habilidades sólidas en diversos lenguajes de programación, incluyendo HTML,
                            JavaScript, Java, C y Dart. <br />

                            <br />Mi experiencia se extiende al uso de Angular como framework para el desarrollo de aplicaciones
                            web,
                            y tengo un conocimiento profundo en el manejo de bases de datos, particularmente en MySQL. Además,
                            he trabajado con herramientas como Netbeans y Android Studio, lo que me ha permitido explorar y
                            desarrollar aplicaciones tanto para entornos de escritorio como para dispositivos móviles. <br />

                            <br />Estoy comprometido con mi crecimiento profesional y continuo perfeccionamiento en el campo del
                            desarrollo de software. Mi enfoque en la educación en el SENA refleja mi dedicación para estar al
                            tanto de las últimas tendencias y tecnologías en el mundo de la programación. ¡Estoy emocionado por
                            seguir aprendiendo y contribuir al mundo del desarrollo de software con mis habilidades y
                            conocimientos!
                        </p>
                        <div class="about-btns">
                            <button>HERE ME</button>
                            <button>DOWNLOAD CV</button>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Servicios</h2>
                    <p>Aquí abajo dejo más detalles sobre los servicios que podria ofrecer como programador.</p>
                    <div class="grid-courses">

                        <div class="grid-course-cont">
                            <div class="bg-color yellow"></div>
                            <div class="cont ">
                                <span><i class='bx bx-code-block'></i></span>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                        <div class="grid-course-cont">
                            <div class="bg-color purp"></div>
                            <div class="cont">
                                <span><i class='bx bx-code-block'></i></span>
                                <h3>App Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                        <div class="grid-course-cont">
                            <div class="bg-color green"></div>
                            <div class="cont">
                                <span><i class='bx bx-code-block'></i></span>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}