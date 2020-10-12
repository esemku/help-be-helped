import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import WantToHelp from '../WantToHelp'

it('should render without crashing', () => {
  const { getByText } = render(<WantToHelp />)
  expect(getByText('WantToHelp!!!')).toBeInTheDocument()
})
