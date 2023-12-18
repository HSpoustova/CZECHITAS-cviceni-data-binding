import { useState } from 'react';

// Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální hodnotu, kterou uživatel do inputu napíše.

export const Ukol1 = () => {
  const [login, setLogin] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin('');
  };

  console.log(login);

  return (
    <>
      <h1>Úkol 1</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login:
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          ></input>
        </label>
        <button type="submit">Odeslat</button>
      </form>
    </>
  );
};
