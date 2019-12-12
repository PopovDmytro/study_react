import React from 'react';
import Link from 'next/link'

const errorPage = () => {
  return (
    <div>
      <h1>Oops, 404</h1>
      <p>GO Back to<Link href="/"><a>Home</a></Link></p>
    </div>
  );
};

export default errorPage;