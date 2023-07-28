import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      
        <button type="button" onClick={() => window.open('https://github.com/FaridBAHR1')} className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize any Article in minutes <br/>
        <span className="orange_gradient">with Summize</span>
      </h1>
      <h2 className="desc">
        Simplify your learning with Summize. <br/>
        Summize any article on any topic. <br/>
        You can Summize, now.
      </h2>
    </header>
  )
}

export default Hero