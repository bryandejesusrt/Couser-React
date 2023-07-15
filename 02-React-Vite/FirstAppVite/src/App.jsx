import  {useState, Fragment} from "react"
import reactLogo from './assets/react.svg'
import './App.css'

const  App = () => {

  const [contador , setContador] = useState(10);

  const disminuir = () => {
    setContador(contador -1);
  };

  const aumentar = () => {
    setContador(contador +1);
  };
  return (
    <Fragment>
      <div className>
        <img src={reactLogo} width ="850" className="logo react" alt="React logo" />
        <br />
        <button onClick={disminuir}> - </button>
        <h1>{contador}</h1>
        <button onClick={aumentar}> + </button>
      </div>
    </Fragment>
  )
}

export default App

