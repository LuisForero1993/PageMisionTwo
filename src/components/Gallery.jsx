import { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

import erdImage from '../assets/erd.png';
import cliente1 from '../assets/Nuevo Cliente.png';
import cliente2 from '../assets/Modificar Cliente.png';
import mesa from '../assets/Actualizar Mesa.png';
import detalle from '../assets/Detalle Pedido.png';
import actualizar1 from '../assets/Pedido Preparacion.png';
import actualizar2 from '../assets/Pedido Listo.png';
import actualizar3 from '../assets/Pedido Entregado.png';
import factura from '../assets/Generar Factura.png';


const images = [
  { src: erdImage, title: 'Diagrama ERD', description: 'Relaciones entre entidades del sistema de restaurante.' },
  { src: cliente1, title: 'Nuevo Cliente', description: 'Ingresa los datos de un nuevo Cliente.' },
  { src: cliente2, title: 'Modificar Cliente', description: 'Modifica datos del nuevo cliente ingresado.' },
  { src: mesa, title: 'Actualizar Mesa', description: 'Actualiza el estado de la mesa disponible a ocupada' },
  { src: detalle, title: 'Nuevo Pedido', description: 'Ingresa el detalle de un nuevo pedido.' },
  { src: actualizar1, title: 'Actualizar pedido', description: 'Actualiza el estado del pedido a Preparación.' },
  { src: actualizar2, title: 'Actualizar pedido', description: 'Actualiza el estado del pedido a Listo.' },
  { src: actualizar3, title: 'Actualizar pedido', description: 'Actualiza el estado del pedido a Entregado.' },
  { src: factura, title: 'Generar factura', description: 'Genera la factura del pedido.' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index]);

  return (
    <div className={styles.gallery}>
      <GalleryItem {...images[index]} />
      <div className={styles.controls}>
        <button onClick={prev}>⟨ Anterior</button>
        <button onClick={next}>Siguiente ⟩</button>
      </div>
      <p className={styles.counter}>Imagen {index + 1} de {images.length}</p>
      <div className={styles.thumbnails}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.title}
            className={`${styles.thumbnail} ${i === index ? styles.active : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}