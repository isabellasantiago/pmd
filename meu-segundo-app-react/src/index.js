import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const App = () => {
    const estiloBotao = {
        marginTop: 12,
        padding: '8px',
        backgroundColor: 'blueviolet',
        color: '#FFF',
        border: 'none',
        width: '100%',
        borderRadius: '8px'
    }

    const textoDoRotulo = 'Nome:'

    const obterTextoDoBotao = () => 'Enviar'

    const testeClick = () => alert('Cliclou...')

    return (
        <div style={{
            width: '768px',
            margin: 'auto',
            backgroundColor: '#EEE',
            padding: '12px',
            borderRadius: '8px'
        }}>
            <label
                htmlFor="nome"
                className='rotulo'
                style={{
                    display:'block',
                    marginBottom: 4,
                }}
            >
                {textoDoRotulo}
            </label>
            <input type="text" id="nome" style={{
                padding: '8px 0px',
                border: 'none',
                width: '100%',
                borderRadius: '8px',
                outline: 'none'
            }} />
            <button
                onClick={testeClick}
                style={estiloBotao}
            >
                {obterTextoDoBotao()}
            </button>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)