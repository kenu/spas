import { useState } from 'react';

const HiThere = () => {
  const [name, setName] = useState('React');

  function handleClick() {
    setName('Other');
  }

  return (
    <section>
      <h3>Hello {name}</h3>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </section>
  );
};

export default HiThere;
