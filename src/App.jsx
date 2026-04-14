import { useMemo, useState } from "react";
import "./App.css";

// product card: name, media, price, description, details/specs, cta

const product = {
  name: "",
  media: [
    {
      type: "image",
      src: "",
      alt: "",
      primary: true,
    },
  ],
  price: 0,
  description: "",
  specs: {},
  tagline: "",
  variants: [""],
  highlights: [""],
}

function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Product Page</h1>
    </main>
  )
}

export default App