import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [arry, setArray] = useState([])
  
    const handleText = useCallback((e) => {
      if(e.target.value.length > 5) {
        alert("5文字以内にしてください")
        return;
      }
      setText(e.target.value.trim());
    }, []);
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ文字列があります")
          return prevArray;
        }
          const newArray = [...prevArray, text];
        return newArray
      });
    }, [text]);
  
    return { text, arry, handleText, handleAdd};
  }
  