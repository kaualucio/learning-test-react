import { fireEvent, render, waitFor } from "@testing-library/react"
import Counter from "./Counter"

describe('App File', () => {
  it('should show on screen the initial value count and three buttons', () => {
    const { getByText } = render(<Counter />)
    
    const count = getByText('0')
    const buttonPlus = getByText('+1')
    const buttonReset = getByText('Resetar')
    const buttonMinus = getByText('-1')
    expect(count).toBeTruthy()
    expect(buttonPlus).toBeTruthy()
    expect(buttonReset).toBeTruthy()
    expect(buttonMinus).toBeTruthy()
  })

  describe('Button +1', () => {
    it('should add one to the counter', async () => {
      const { getByText, findByText } = render(<Counter />)
      
      fireEvent.click(getByText('+1'))
      const count = findByText('1')
      expect(count).toBeInTheDocument
  
    })
  })

  describe('Button Resetar', () => {
    it('should reset the counter to the inital value 0', async () => {
      const { getByText, findByText } = render(<Counter />)
      
      fireEvent.click(getByText('Resetar'))
      const count = findByText('0')
      expect(count).toBeTruthy()
  
    })
  })

  describe('Button -1 ', () => {
    it('should remove one to the counter', async () => {
      const { getByText, findByText } = render(<Counter />)
      
      fireEvent.click(getByText('+1'))
      fireEvent.click(getByText('-1'))
      const count = findByText('0')
      expect(count).toBeInTheDocument
  
    })

    it('should have the property disabled if counter is 0', () => {
      const { getByText } = render(<Counter />)
      const buttonMinus = getByText('-1')
      
      expect(buttonMinus).toHaveProperty('disabled', true)
    })

    it("shouldn't have the property disabled if counter is more than 0", () => {
      const { getByText } = render(<Counter />)
      
      fireEvent.click(getByText('+1'))
      const buttonMinus = getByText('-1')
      
      expect(buttonMinus).toHaveProperty('disabled', false)
    })
  })
})

