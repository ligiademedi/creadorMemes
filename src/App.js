import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const  onChangeLinea1 = function(evento){
        setLinea1(evento.target.value);
  }
  const  onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
}
const  onChangeImagen = function(evento){
  setImagen(evento.target.value);
}
const  onClickExportar = function(evento){
  alert("Exportar ");
  html2canvas(document.querySelector("#meme")).then(canvas=>{
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
}


  return (
    <div className="App container">
      <div className="jumbotron">
        <div className="form-group">

      <select onChange={onChangeImagen}className="form-select">
        <option value="2">Rana</option>
        <option value="1">homero</option>
        <option value="3">niño</option>
      </select>

      <br />
      <br />
      <input onChange={onChangeLinea1}type="text"  placeholder="Linea 1"  />
      <br />
      <br />
      <input  onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <br />
      <button onClick={onClickExportar} className="btn btn-lg btn-info">Exportar</button>
      <br />
      <br />
      <div className="meme" id="meme">
        <span className="">{linea1}</span>
        <br />
        <br />
        <span className="">{linea2}</span>
        <img src={"/img/"+imagen+".jpg"}></img>
      </div>





        </div>
      </div>
    </div>
  );
}

export default App;
