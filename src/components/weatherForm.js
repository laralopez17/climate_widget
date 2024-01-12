import { useState } from "react";
import styles from "../styles/weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);

    console.log(city);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" onChange={onChange} />
    </form>
  );
}
