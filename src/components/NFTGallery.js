import React from 'react';
import NFTCard from './NFTCard';
import nftData from '../nftData.json';
import './NFTGallery.css';


function NFTGallery() {
  return (
    <div className="nft-gallery">
      {nftData.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}

export default NFTGallery;
