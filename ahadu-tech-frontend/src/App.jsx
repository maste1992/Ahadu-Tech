import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      
        
        {/* TAILWIND TEST SECTION */}
        <div className="bg-green-700 p-8 rounded-xl shadow-lg border-2 border-dashed border-blue-500 mt-8">
          <h1 className="text-5xl bg-blue-600  font-extrabold text-black-600 mb-4 underline">
            Get started learning Tailwind CSS with Vite and React!
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-6">
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
        {/* END TAILWIND TEST SECTION */}

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* ... the rest of the original code remains the same ... */}
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
           {/* ... rest of the social links ... */}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App