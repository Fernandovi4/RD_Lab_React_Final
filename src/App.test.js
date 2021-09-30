import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import React from 'react'



test('renders home page', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const linkElement = screen.getByText(/NETFLIX-LIKE/i)
  expect(linkElement).toBeInTheDocument()
})


// describe("App", () => {
//   it('renders home page', () => {
//     render(
//       <Provider store={store}>
//         <App />
//       </Provider>)
//     screen.debug()
//     expect(screen.getByText(/NETFLIX-LIKE/i)).toBeInTheDocument()
//   })
// })

// describe('App', () => {
//   it('renders home page', () => {
//     render(<Provider store={store}><App /></Provider>)
//
//     expect(screen.getByText(/NETFLIX-LIKE/i)).toBeInTheDocument()
//     expect(screen.getAllByRole('button')).toBeInTheDocument()
//   })
// })


