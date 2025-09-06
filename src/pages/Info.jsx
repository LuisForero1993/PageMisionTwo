import styles from './Info.module.css'

export default function Info() {
  return (
    <div className={styles.container}>
      <h1>📘 Información del Proyecto</h1>

      <section className={styles.section}>
        <h2>🧾 Nombre del Proyecto</h2>
        <p><strong>La Mesa Perfecta</strong></p>
        <p>Una solución digital para la gestión de pedidos en restaurantes, diseñada para optimizar la atención al cliente, la trazabilidad operativa y el control técnico de productos.</p>
      </section>

      <section className={styles.section}>
        <h2>🏷️ Sector</h2>
        <p><strong>Restauración y servicios gastronómicos</strong></p>
        <p>El sistema está orientado a restaurantes que buscan mejorar la eficiencia en la toma de pedidos, la asignación de mesas y la experiencia del comensal, integrando herramientas tecnológicas adaptadas al entorno operativo.</p>
      </section>

      <section className={styles.section}>
        <h2>👨‍💻 Creador del Proyecto</h2>
        <p><strong>Ing. Luis Forero</strong></p>
        <p>Gestor técnico institucional y desarrollador senior en ALACON METROLOGÍA SAS, con experiencia en automatización de flujos, trazabilidad operativa y cumplimiento normativo. Este proyecto refleja su enfoque metódico, colaborativo y orientado a resultados, integrando calidad técnica con innovación visual.</p>
      </section>

      <footer className={styles.footer}>
        <p>Versión 1.0 — Proyecto desarrollado en San José de Cúcuta, Colombia</p>
      </footer>
    </div>
  )
}