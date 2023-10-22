import React from 'react';
import './NFTCard.css';


function NFTCard({ nft }) {
  return (
    <div className="nft-card">
      <img src={nft.image} alt={nft.name} />
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>
    </div>
  );
}

export default NFTCard;