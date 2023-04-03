import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => setCars(data.cars))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1> Cars </h1>
        {cars.map(car => (
          <div key={car.id}>
            <h2>{car.name}</h2>

            <p>{car.price}$</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
