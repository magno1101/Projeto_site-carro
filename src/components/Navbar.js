import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAsyncValue } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const { user } = useAuthValue();
    const {logout} = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Concessionaria<span>Veloz</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registro" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
                        </li>
                    </>
                )};
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>Novo Anúncio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>DashBoard</NavLink>
                        </li>
                    </>
                )};
                <li>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )};
            </ul>
        </nav>
    );
};
export default Navbar;