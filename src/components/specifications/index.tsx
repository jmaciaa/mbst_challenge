import styles from "./specifications.module.css"

export default function Specifications({ specs }: { specs: { title: string; content: string }[] }) {
  return (
    <section className={styles.specifications}>
      <h2>SPECIFICATIONS</h2>
      <div>
        {specs.map(({ title, content }) => (
          <div className={styles.spec} key={title}>
            <span className={styles.title}>{title}</span>
            <span>{content}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
