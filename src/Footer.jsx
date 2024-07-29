import React from 'react';

function Footer(){
  return (
    <div className="bg-slate-700 flex justify-around items-center mt-10 py-4">
      <p className="text-white text-sm">Copyright &#169; 2022 | CodeYogi</p>
      <p className="text-white text-sm">Powered By CodeYogi</p>
    </div>
  );
}

export default React.memo(Footer);