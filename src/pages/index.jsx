import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  let [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor ="lightblue";
    return () => {
      document.body.style.backgroundColor ="";
    };
  }, []);

  console.log(count)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  )
}
