import React from 'react';

const Filtre = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => {
  return (
    <div className="filtre">
      <input 
        type="text" 
        placeholder="Filtrer par titre" 
        value={filterTitle} 
        onChange={(e) => setFilterTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Filtrer par note" 
        value={filterRating} 
        onChange={(e) => setFilterRating(e.target.value)} 
      />
    </div>
  );
};

export default Filtre;
