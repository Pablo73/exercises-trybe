// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('button', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Arragen
  render(<App />);
  // const buttonNewJoker = screen.getByRole('button', {  name: /new joke/i});

// Assert
const renderJoke = await screen.findByText('Whiteboards ... are remarkable.');
expect(renderJoke).toBeInTheDocument();
expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
expect(global.fetch).toHaveBeenCalledTimes(1);

global.fetch.mockResolvedValueOnce({
  json: jest.fn().mockResolvedValue(joke2),
 });

 userEvent.click(screen.getByRole('button', { name: /new joke/i }));

expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
expect(global.fetch).toBeCalledTimes(2);

});


//-------------------------------------------------------------------------------------------------

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke2', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   // Outra forma de mock do fetch:
//   global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(joke),
//   }));

//  // Outra forma de mock do fetch:
//  global.fetch = jest.fn(async () => ({
//   json: async () => joke
// }));

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
// });