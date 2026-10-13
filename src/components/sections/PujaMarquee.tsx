import { pujaServices } from "@/data/pujaServices";
import styles from "@/components/sections/PujaMarquee.module.css";

function ServiceNames({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className={styles.sequence}
      aria-hidden={duplicate ? "true" : undefined}
      role={duplicate ? undefined : "list"}
    >
      {pujaServices.map((service) => (
        <div
          className={styles.entry}
          key={service.slug}
          role={duplicate ? undefined : "listitem"}
        >
          <div
            className={styles.name}
          >
            {service.title}
          </div>
          <span className={styles.separator} aria-hidden="true">
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

export function PujaMarquee() {
  return (
    <section
      className={styles.marquee}
      aria-label="वैदिक पूजा एवं अनुष्ठान"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <ServiceNames />
          <ServiceNames duplicate />
        </div>
      </div>
    </section>
  );
}
