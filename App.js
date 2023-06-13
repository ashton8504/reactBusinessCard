import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Footer from "./components/Footer.js"

export default function App(){
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}