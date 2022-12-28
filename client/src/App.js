import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const callAPI = async () => {
    axios.get('/api').then ((res) => {
      console.log('result',res.data);
    })
  }

  useEffect(() => {
    callAPI()
  },[])

  return (
    <div className="App">
      TEST
    </div>
  );
}

export default App;
