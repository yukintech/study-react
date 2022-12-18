import { useCallback, useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(true);
  
    const handleDisplay =  useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
    });
  
    const handleClick = useCallback(() => {
      console.log(count);
      if (count < 10){
        setCount(prevCount => prevCount + 1);
      }    
    }, [count]);
  
    return { count, isShow, handleClick, handleDisplay};
  }
