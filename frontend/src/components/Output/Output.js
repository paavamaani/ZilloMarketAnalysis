import React from 'react';

import styles from './Output.module.css';

function Output({ data }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Response from the Model</h2>
      <pre className={styles.data}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Output;
