import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div style={{
            width: '768px',
            margin: 'auto',
            backgroundColor: '#EEE',
            padding: '12px',
            borderRadius: '8px'
        }}>
            <label htmlFor="nome"
                style={{
                    display:'block',
                    marginBottom: 4,
                }}
            >
                Nome
            </label>
            <input type="text" id="nome" style={{
                padding: '8px 0px',
                border: 'none',
                width: '100%',
                borderRadius: '8px',
                outline: 'none'
            }} />
            <button
                style={{
                    marginTop: 12,
                    padding: '8px',
                    backgroundColor: 'blueviolet',
                    color: '#FFF',
                    border: 'none',
                    width: '100%',
                    borderRadius: '8px'
                }}
            >
                Enviar
            </button>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)