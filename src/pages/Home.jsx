import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🍽️ La Mesa Perfecta</h1>
        <p className={styles.subtitle}>
          Sistema de gestión de pedidos para restaurantes modernos
        </p>
      </header>

      <section className={styles.description}>
        <h2>🧾 Descripción del Proyecto</h2>
        <p>
          <strong>La Mesa Perfecta</strong> es una solución digital diseñada para optimizar la gestión operativa de restaurantes, enfocándose en la trazabilidad de pedidos, la eficiencia del servicio en mesa y el control técnico de productos ofrecidos.
        </p>
        <p>
          El sistema permite registrar, visualizar y administrar pedidos en tiempo real, integrando roles como cliente, mesero y usuario técnico del sistema. Los productos se agrupan por categoría: <em>Entrada</em>, <em>Plato fuerte</em>, <em>Bebida</em> y <em>Postre</em>, facilitando la navegación y la toma de decisiones.
        </p>
        <ul>
          <li>✅ Automatización del flujo completo de pedidos</li>
          <li>🪑 Asignación eficiente de mesas y clientes</li>
          <li>📦 Visualización clara de productos y totales</li>
          <li>🔍 Filtros por estado: pendiente, entregado, cancelado</li>
          <li>🧠 Validaciones técnicas y trazabilidad institucional</li>
        </ul>
        <p>
          Este sistema está preparado para escalar en restaurantes pequeños, medianos o grandes, integrando calidad operativa con cumplimiento normativo.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>Versión 1.0 — Desarrollado por el equipo técnico del restaurante</p>
      </footer>
    </div>
  )
}