import React from "react";
import styles from "./Footer.module.css";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className={styles.footer}>   
            <div className={styles.container_footer}>
                <div>
                    <p>Endereço : Rua dos Carros Velozes, 1234, Velocidade Urbana, Motorlândia, CEP: 12345-678 </p>
                    <p>Telefone :(12) 3456-7890</p>
                    <p>Email : info@concessionariaveloz.com</p>
                </div>
                <div>
                    <p><FaFacebookSquare/> : @concessionariaveloz</p>
                    <p><AiOutlineInstagram/>: @velocidade_carros</p>
                    <p><AiOutlineTwitter/>: @velocarros</p>
                </div>
                <div>
                    <p>Horario de Funcionamento</p>
                    <p>Segunda a Sábado: 9:00 - 18:00</p>
                    <p></p>
                </div>
            </div>
            <h3>Site de Carros &copy; 2023 </h3>
        </footer>
    )
}
export default Footer;