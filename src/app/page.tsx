'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

// I decided to go for the gamer/programmer kinda vibe so I should add a few animations.

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (showAboutMe) {
      const fullText = "Hi my name is Dylan and this is my website. Your welcome to look around. I am currently looking for a job and freelancing to help me stay alive in this time in age. So if you have any questions or offers just send me a email and I will try and respond in atleast a day. Oh also there's a plentyful of projects at the bottom that you can look at if you want to see my skills in action. Email: Dsisson0505@gmail.com"; // Replace this with your desired text
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 65); // Adjust the typing speed here
    }
  }, [showAboutMe]);


  function aboutMe() {
    return <div className='bg-green-400 min-w-[50rem] p-4 rounded-lg text-black max-w-[80rem]'>
      <h1>{typedText}</h1>
    </div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      {/* Beginning animation line */}
      <div className='absolute translate-x-[100%] bg-black h-[136vh] w-full left-0 animate-left_to_right'>
        <div className='relative left-0 min-h-full w-3 tv-static z-1 animate-left_to_right'></div>
      </div>
      
      
      {/* About Me */}
      <section className='flex flex-col justify-center items-center h-[15rem] w-full'>
        <h1>To Learn More About Me</h1>
        <button className='hover:animate-wiggle p-2' onClick={() => setShowAboutMe(true)}>
          Click <span>Here</span>
        </button>

        <div>
          {showAboutMe && aboutMe()}
        </div>
      </section>

      {/* Freelancing pricing area */}
      <section className='flex flex-col justify-center items-center w-full'>
        <table className='table-auto border-separate border-spacing-x-60 border-spacing-y-2 border text-center p-2 border-green-400 border-solid rounded-sm'>
          <thead>
            <th colSpan={3} className='p-4'><h1>Freelancing Package Options</h1></th>
          </thead>
          <thead>
            <th className='w-[80px] p-2 border border-green-400 bg-gray-900'>Basic</th>
            <th className='w-[80px] p-2 bg-green-400 border border-gray-800 text-black'>Standard</th>
            <th className='w-[80px] p-2 border border-green-400 bg-gray-900 '>Premium</th>
          </thead>
          {/* # of Pages */}
          <tr>
            <td colSpan={3}><h4>Number of Pages</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>6</td>
          </tr>
          {/* Revisions */}
          <tr>
            <td colSpan={3}><h4>Revisions</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>6</td>
          </tr>
          {/* Content Upload */}
          <tr>
            <td colSpan={3}><h4>Content Upload</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>6</td>
          </tr>
          {/* Plugins/Extensions */}
          <tr>
            <td colSpan={3}><h4>Plugins/Extensions</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>8</td>
          </tr>
          {/* Full Website */}
          <tr>
            <td colSpan={3}><h4>Full Website</h4></td>
          </tr>
          <tr>
            <td>/</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* E-commerce Functionality */}
          <tr>
            <td colSpan={3}><h4>E-commerce Functionality</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* Number of products */}
          <tr>
            <td colSpan={3}><h4>Number of Products</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>8</td>
          </tr>
          {/* Payment Processing */}
          <tr>
            <td colSpan={3}><h4>Payment Processing</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* Opt-In Form */}
          <tr>
            <td colSpan={3}><h4>Opt-In Form</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>/</td>
          </tr>
          {/* Autoresponder Integration */}
          <tr>
            <td colSpan={3}><h4>Autoresponder Integration</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>/</td>
          </tr>
          {/* Speed optimization */}
          <tr>
            <td colSpan={3}><h4>Speed optimization</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* Hosting Setup */}
          <tr>
            <td colSpan={3}><h4>Hosting Setup</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* Social Media Icons */}
          <tr>
            <td colSpan={3}><h4>Social Media Icons</h4></td>
          </tr>
          <tr>
            <td>x</td>
            <td>/</td>
            <td>/</td>
          </tr>
          {/* Liscensed Images //From Shuterstock */}
          <tr>
            <td colSpan={3}><h4>Liscened Images</h4></td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>6</td>
          </tr>
          {/* Prices */}
          <tr>
            <td colSpan={3}><h4>Prices</h4></td>
          </tr>
          <tr>
            <td>$80</td>
            <td>$260</td>
            <td>$450</td>
          </tr>
          {/* Buttons */}
          <tr>
            <td><button className='w-[80px] p-2 border border-green-400 bg-gray-900'>Buy</button></td>
            <td><button className='w-[80px] p-2 bg-green-400 border border-gray-800 text-black'>Buy</button></td>
            <td><button className='w-[80px] p-2 border border-green-400 bg-gray-900'>Buy</button></td>
          </tr>
        </table>
      </section>

      {/* My Projects/Experience */}
      <section className='flex flex-col justify-center items-center h-[20rem] w-full'>
        <p className='p-2'>My Projects area</p>
        <div className='flex gap-6 bg-slate-200 border-4 border-green-400 rounded-md w-[80rem] max-w-[80rem] p-4 text-black'>
          <div>
            <h2 className='text-center'>Catering Business</h2>
            <img placeholder='thumbnail' src="" className='w-[200px] h-[200px]'></img>
          </div>
          <div>
            <h2 className='text-center'>Todo App</h2>
            <img placeholder='thumbnail' src="" className='w-[200px] h-[200px]'></img>
          </div>
        </div>
      </section>
    </main>
  )
}
