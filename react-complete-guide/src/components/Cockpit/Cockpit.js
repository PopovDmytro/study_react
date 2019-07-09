import React, {useEffect} from 'react';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit] useEffect');
    // Http request...

    return () => {
      console.log('[Cockpit] cleanup work in use effect');
    };
  }, [/*props.persons*/]);

  useEffect(() => {
    console.log('[Cockpit] useEffect 2nd');
    // Http request...

    return () => {
      console.log('[Cockpit] cleanup work in useEffect 2nd');
    };
  });

  return (
    [
      <h1 key="i1">Cockpit</h1>,
      <div key="i2">
        some extra div
      </div>,
    ]
  );
};

export default React.memo(Cockpit);