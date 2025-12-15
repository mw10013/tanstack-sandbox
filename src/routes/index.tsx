import { createFileRoute } from '@tanstack/react-router'
import * as TanRouter from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="p-6">
      <TanRouter.Link to="/example">Example</TanRouter.Link>
    </div>
  )
}
