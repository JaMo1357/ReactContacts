import React, { useState, useEffect } from 'react';

function LeftMenu() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <aside className="flex flex-col w-48 h-full overflow-y-scroll">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </aside>
  );
}

export default LeftMenu