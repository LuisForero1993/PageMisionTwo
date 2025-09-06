import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

export default function GalleryItem({ src, title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoom, setZoom] = useState(1);
  const modalRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  const openModal = () => {
    setIsOpen(true);
    setZoomActive(false);
    setZoom(1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setZoomActive(false);
    setZoom(1);
  };

  const toggleZoom = () => {
    setZoomActive((prev) => !prev);
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  const handleWheel = (e) => {
    if (!zoomActive) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  const handleMouseDown = (e) => {
    if (!zoomActive || !modalRef.current) return;
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: modalRef.current.scrollLeft,
      scrollTop: modalRef.current.scrollTop
    };
    modalRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !modalRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    modalRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
    modalRef.current.scrollTop = dragStart.current.scrollTop - dy;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (modalRef.current) modalRef.current.style.cursor = zoomActive ? 'grab' : 'default';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (modalRef.current) modalRef.current.style.cursor = zoomActive ? 'grab' : 'default';
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={styles.galleryItem}>
      <h2>{title}</h2>
      <div className={styles.imageWrapper}>
        <img
          src={src}
          alt={title}
          className={styles.galleryImage}
          onClick={openModal}
          title="Haz clic para ampliar"
        />
      </div>
      <p>{description}</p>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={src}
              alt={title}
              className={styles.modalImage}
              onClick={toggleZoom}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                cursor: zoomActive ? 'grab' : 'zoom-in'
              }}
            />
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}