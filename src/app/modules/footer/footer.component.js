import React from 'react';
import styles from './footer.module.css';

function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        © DevOps TCC. 2022. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default FooterComponent;
