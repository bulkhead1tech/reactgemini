import { useState } from 'react'
import './App.css'

function App() {
  const [audiofile, setaudiofile] = useState(null)
  const [first, setfirst] = useState("")

  const handlefilechange=(e)=>{
    setaudiofile(e.target.files[0]);
  }

  const submithandler = async (e) => {
    e.preventDefault();
    if (!audiofile) {
      alert("No audio file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', audiofile);

      const response = await fetch("https://pythongemini.vercel.app/api/mich", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();

      console.log(data.result);
      setfirst(data.result)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
    <div className='flex flex-col p-2 bg-black overflow-hidden h-screen w-screen bg-gradient-to-t from-teal-950 backdrop-blur-lg via-transparent to-transparent'>
     <div className='h-[10vh] w-full flex rounded-4xl shadow- justify-start bg-transparent px-5 -inset-2 backdrop-blur-3xl shadow-teal-800 shadow-lg text-teal-500 items-center'><h1 className='text-4xl font-bold'>M</h1><h4 className='text-xl text-white font-mono pt-2'>ichanikoi</h4></div>
     <div className='flex p-5 w-full h-full flex-col lg:w-full lg:h-full lg:flex-row'>
     <div className='h-1/2 w-full flex flex-col  justify-center px-5 py-2 items-center md:h-full md:w-1/2 lg:h-full lg:w-1/2 md:flex-row lg:flex-row'> 
     <h1 className='text-white text-bold lg:font-bold text-8xl'>
  Be 
  <span className='text-teal-500'> Cyber </span> 
  Secure...
</h1>
     </div>
     <div className='h-1/2 w-full p-5 flex flex-col md:h-full md:w-1/2 lg:h-full lg:w-1/2 lg:p-10  justify-center items-center'>
     <div className='h-1/3 w-full px-5 py-5 text-red-500 flex items-center justify-center border-slate-400 border-2 border-solid text-4xl'>
     {first!=""?<>{first}</>:<>{"Loading..."}</>}
     </div>
      <form className='h-fit w-fit p-2 flex flex-col gap-y-2' onSubmit={submithandler} encType='multipart/form-data'>
        <input className='bg-white p-2 rounded-4xl cursor-pointer' type='file' accept="audio/*" onChange={handlefilechange} />
      <button type='submit' className='cursor-pointer text-xl w-full bg-teal-500 p-2 hover:bg-teal-600 hover:text-white ease rounded-lg'>Click Me</button>
      </form>
     </div>
     </div>
    </div>
    </>
  )
}

export default App
