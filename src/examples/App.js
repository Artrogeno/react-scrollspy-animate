import React from 'react'
import { Scrollspy } from './../lib'
import './App.css'

const App = () => (
  <div className="App">
    <header>
      <Scrollspy level={2} >
        <li>
          <a href="#section-1">Section 1</a>
        </li>
        <li>
          <a href="#section-2">Section 2</a>
        </li>
        <li>
          <a href="#section-3">Section 3</a>
        </li>
        <li>
          <a href="#section-4">Section 4</a>
        </li>
      </Scrollspy>
    </header>

    <div className="container">
      <section id="section-1">
        <div className="page">
          <h2>Section 1</h2>
        </div>
      </section>

      <section id="section-2">
        <div className="page">
          <h2>Section 2</h2>
        </div>
      </section>

      <section id="section-3">
        <div className="page">
          <h2>Section 3</h2>
        </div>
      </section>

      <section id="section-4">
        <div className="page">
          <h2>Section 4</h2>
        </div>
      </section>
    </div>
  </div>
)

export default App
