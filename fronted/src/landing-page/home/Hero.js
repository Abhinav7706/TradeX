import { Link } from 'react-router-dom';

function Hero() {
  return ( 
    <div className="container p-5 mb-5">
      <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, mutual funds, and more.</p>
            <Link to="/signup" className="p-3 btn btn-primary mb-5 fs-5 text-decoration-none" style={{width:"20%", minWidth:"180px", margin:" 0 auto", backgroundColor: "#387ed1", borderColor: "#387ed1"}}>
              Sign Up Now
            </Link>
      </div>
    </div>
   );
}

export default Hero;