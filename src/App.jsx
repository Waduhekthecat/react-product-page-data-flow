import { useMemo, useState } from "react";
import "./App.css";

const product = {
  name:"",
  tagline:"",
  price: 0,
  variants: ["","",""],
  highlights: ["","",""],
  description: "",
  details: ["","",""]
}

function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Product Page</h1>
    </main>
  )
}

export default App