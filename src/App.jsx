
function App() {
  return (
    <>
       <header>
        <section>
        <div className="container">
              <div className="even-columns">
                <img className="logo" src="src\assets\white.png" alt="Produs Logo" />
              </div>
              <div className="even-columns | copy">
                <h1>Para <span style={{color: "var(--clr-strong)"}}>estudante</span> que sonham grande</h1>
                <img src="src\assets\sample.png" alt="Exemplo da Área de Membros" />
                <p>Comece hoje a construir a vida que você sempre sonhou. Desenvolva as habilidades necessárias para ter sucesso nos estudos, ao lado de pessoas ambiciosas como você. A comunidade perfeita existe, e está só te esperando!</p>
                <a href="">Quero fazer parte</a>
              </div>
            </div>
        </section>

        <section>
            <div className="container | fita">
              <div className="even-columns">
                <img src="src\assets\Fitas.png" alt="" />
              </div>
            </div>
        </section>

        <section>
          <div className="container | valores">
            <div className="even-columns">
              <h1>Educação. Inspiração. <span style={{color: "var(--clr-strong)"}}>Conexão</span></h1>
              <p>A Produs Hub surgiu com o intuito de conectar, inspirar e munir de conhecimento os estudantes que buscam o alto desempenho. Juntos formaremos o futuro do Brasil.</p>
              <img src="src\assets\Aprender.png" alt="Valores da Produs" /> 
            </div>
          </div>
        </section>
            
        </header>
        <main>
          
        </main>
        <footer>

        </footer>

</>
  )
}

export default App