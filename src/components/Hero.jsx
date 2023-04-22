import { logo } from '../assets'

const Hero = () => {
  return (
    <>
      <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/PrtHub/Video_Summerizer", "_blank")
          }
          className='rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'
        >
          GitHub
        </button>
      </nav>

      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI</span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
    </>
  )
}

export default Hero