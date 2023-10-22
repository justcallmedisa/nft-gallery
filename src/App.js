import React from 'react';
import './App.css';
import NFTGallery from './components/NFTGallery';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <h1>My NFT Collection</h1>
      <NFTGallery />
    </div>
  );
}

export default App;
