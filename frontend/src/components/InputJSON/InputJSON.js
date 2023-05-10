import React, { useState } from 'react';
import axios from 'axios';

import styles from './InputJSON.module.css';

import Output from '../Output/Output';

function InputJSON() {
  const [jsonData, setJsonData] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonData);
      const response = await axios.post('http://localhost:3001/prediction', parsedData);
      
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}
        onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      {responseData && <Output data={responseData} />}
    </div>
  );
}

export default InputJSON;