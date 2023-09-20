import { useState } from 'react'
import Footer from './Footer'


function App() {
  const [color, setColor] = useState('black')

  return (

    <div className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}>
      {/* default color- pink in full screen */}

      <h1 className='font-extrabold text-4xl text-center text-white pt-40  italic '> 🚀 Background Changer App 😍 </h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center shadow-md gap-5 bg-white rounded-lg px-3 py-3 mb-8">
          
          <button
            //  onClick={setColor("")} // we have to give setColor as direct fun not as returned value  onclick wants fun only (necessary to give)-- if we give fun like {}-- we can't give params--we have to use ()// direct execute and onclick will then takes what?? returned value but we don't have to give returned value~~ we have to pass fun directly(callback fun )
            onClick={() => { setColor("red") }}
            className='outline-none px-4 py-1 rounded-xl text-white font-bold shadow-xl' style={{ backgroundColor: 'red' }}>Red</button>

          <button
            onClick={() => { setColor("green") }}
            className='outline-none px-4 py-1 rounded-xl text-white font-bold shadow-xl' style={{ backgroundColor: 'green' }}>Green</button>

          <button
            onClick={() => { setColor("orange") }}
            className='outline-none px-4 py-1 rounded-xl text-black font-bold shadow-xl' style={{ backgroundColor: 'orange' }}>Orange</button>

          

          <button
            onClick={() => { setColor("violet") }}
            className='outline-none px-4 py-1 rounded-xl text-black font-bold shadow-xl' style={{ backgroundColor: 'violet' }}>Violet</button>

          <button
            onClick={() => { setColor("blue") }}
            className='outline-none px-4 py-1 rounded-xl text-white font-bold shadow-xl' style={{ backgroundColor: 'blue' }}>Blue</button>

          <button
            onClick={() => { setColor("purple") }}
            className='outline-none px-4 py-1 rounded-xl text-white font-bold shadow-xl' style={{ backgroundColor: 'purple' }}>Purple</button>

          <button
            onClick={() => { setColor("olive") }}
            className='outline-none px-4 py-1 rounded-xl text-white font-bold shadow-xl' style={{ backgroundColor: 'olive' }}>Olive</button>

     

        </div>
        <Footer />
      </div>
  
    </div>
   

  )
}

export default App
