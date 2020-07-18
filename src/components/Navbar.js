import React, { useState } from 'react';

export const Navbar = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState('Learn Hooks');

  return (
    <div>
      <h1>navbar</h1>
    </div>
  );
};
