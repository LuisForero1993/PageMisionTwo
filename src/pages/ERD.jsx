import styles from './ERD.module.css';
import Gallery from '../components/Gallery';

export default function ERD() {
  return (
    <div className={styles.container}>
      <h2>Modelo ERD del sistema</h2>
      <Gallery />
    </div>
  );
}
