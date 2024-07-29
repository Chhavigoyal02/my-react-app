import React, { useCallback } from 'react';

function Select({value,onChange}){
  const handleChange = useCallback((event) => {
    onChange(event);
  }, [onChange]);
  
  return(
    <div className="text-right">
      <select className="border-2 border-gray-200 bg-gray-200 w-full sm:w-auto p-1" value={value} onChange={onChange}>
        <option value="default" >Default Sorting</option>
        <option value="name">Sort by Name</option>
        <option  value="average" >Sort by Average Rating</option>
        <option  value="pricelh" >Sort by price low to high</option>
        <option value="pricehl" >Sort by price high to low</option>
      </select>
    </div>
  );
}

export default React.memo(Select);