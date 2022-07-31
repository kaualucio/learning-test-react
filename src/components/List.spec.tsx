import { cleanup, fireEvent, render, waitFor } from "@testing-library/react"
import List from "./List"
import {rest} from 'msw'
import {setupServer} from 'msw/node'


const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json(
      [
        {
          "userId": 1,
          "id": 1,
          "title": "test",
          "body": "teste"
        }
      ],
    ))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('List component', () => {
  it('should show a button on screen', () => {
    const { getByText } = render(<List />)
    
    const button = getByText('Get Posts')
    
    expect(button).toBeInTheDocument
  })

  it('should show a loading message when button is triggered', async () => {
    
    const { getByText, findByTestId } = render(<List />)
    const button = getByText('Get Posts')
    fireEvent.click(button)
    await waitFor(() => {
      findByTestId('loading')
    })
    expect(render(<p test-id="loading">Buscando posts...</p>)).toBeTruthy()

  })

  it("should show a list of title's from posts ", async () => {
    const { getByText, findByText } = render(<List />)
    const button = getByText('Get Posts')
    fireEvent.click(button)
    expect(findByText('teste')).toBeInTheDocument
  })
})