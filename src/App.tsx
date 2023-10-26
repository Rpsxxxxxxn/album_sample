import { AppBar, Button, Toolbar } from "@mui/material"

function App() {
  return (
    <>
      <div>
        <AppBar position="fixed">
          <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <Button variant="contained">Text</Button>
      </div>
    </>
  )
}

export default App
