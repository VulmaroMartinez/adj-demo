import TestController from "./modules/test/test-controller"
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand">ADJ demo</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a href= "" className="nav-link active">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container mt-4">
        <h2>Inicio</h2>
        <hr/>
        <button className="btn btn-success" onClick={() => TestController.callToAPI()}>API</button>
      </div>
    </>
  )
}

export default App
