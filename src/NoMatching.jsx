import React from 'react';

function NoMatching(){
  return (
    <div className="text-3xl text-primary-default">
      No Product found!!
    </div>
  );
}

export default React.memo(NoMatching);