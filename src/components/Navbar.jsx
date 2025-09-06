import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>PAGINA WEB RESTAURANTE</h1>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Inicio</NavLink>
        <NavLink to="/info" className={({ isActive }) => isActive ? styles.active : ''}>Información</NavLink>
        <NavLink to="/erd" className={({ isActive }) => isActive ? styles.active : ''}>Modelo ERD</NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? styles.active : ''}>Contacto</NavLink>
      </div>
    </nav>
  );
}