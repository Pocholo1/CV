import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'
import Article from './Article.jsx'
import Section from './Section.jsx'
import Nav from './Nav.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Section />
    <Article />
  </React.StrictMode>,
)
