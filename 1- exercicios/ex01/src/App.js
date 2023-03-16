import img1 from './images/img1.jpg'
import './App.css';

const img2 = process.env.img2;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">Pessoas em geral</h1>
      </header>
      <main>
        <div className='img-card'>
          <img src={img2} alt="imagem 2" style={{
           width: "90%",
           height: "70%",
       
           border: "none",
           borderRadius: "8px",
           objectFit: "cover",
        }}/>

        </div>
        <div className='img-card'>
          <img src={img1} alt='imagem 1' className='img3'/>
          <span className='nome'>Fulano de tal</span>
        </div>
        

      </main>
    </div>
  );
}

export default App;
