import React,{useEffect,useRef} from 'react'
import Confetti from 'react-confetti'
const Confettiwin = () => {
  const confettiRef = useRef(null);
    useEffect(()=>{
      const confetti = confettiRef.current;
      const context = confetti.getContext('2d');
    },[])
  return (
    <div>
    <Confetti ref={confettiRef} width={1200} height={800} />
    </div>
  )
}

export default Confettiwin
