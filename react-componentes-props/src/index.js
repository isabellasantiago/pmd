import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <div className='container border rounded mt-2'>
      <div className='row'>
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
      <div className='row'>
        <div className='col-sm-8 col-md-6 m-2'>
          <div className='card'>
            <div className='card-header text-muted'>
              22/04/2022
            </div>
            <div className='card-body d-flex'>
              <div className='card-body d-flex'>
                <div className='d-flex align-items-center'>
                  <i className='fas fa-hdd fa-2x' />
                  <div className='flex-grow-1 rounded ms-2'>
                    <h4 className='text-center'>SSD</h4>
                    <p className='text-center'> SSD Kingston A400 - SATA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8 col-md-6 m-2'>
          <div className='card'>
            <div className='card-header text-muted'>
              25/04/2022
            </div>
            <div className='card-body d-flex'>
              <div className='card-body d-flex'>
                <div className='d-flex align-items-center'>
                  <i className='fas fa-book fa-2x' />
                  <div className='flex-grow-1 rounded ms-2'>
                    <h4 className='text-center'>Livro</h4>
                    <p className='text-center'> Concrete Mathematics -Donald Knuth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8 col-md-6 m-2'>
          <div className='card'>
            <div className='card-header text-muted'>
              30/04/2022
            </div>
            <div className='card-body d-flex'>
              <div className='card-body d-flex'>
                <div className='d-flex align-items-center'>
                  <i className='fas fa-laptop fa-2x' />
                  <div className='flex-grow-1 rounded ms-2'>
                    <h4 className='text-center'>Notebook</h4>
                    <p className='text-center'>Notebook Dell - 8gb - i5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
