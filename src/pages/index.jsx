import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  let [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10){
      setCount(count => count + 1);
    }    
  }, [count]);

  const handleText = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = () => {
    setIsShow((isShow) => !isShow);
  }

  useEffect(() => {
    document.body.style.backgroundColor ="lightblue";
    return () => {
    document.body.style.backgroundColor ="";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input
          type="text"
          value={text}
          onChange={handleText}
      />

      <Main page="index" />

      <Footer />
    </div>
  )
}
