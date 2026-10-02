import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-center">
          We pioneered the distount breaking model in India
          <br />
          Now, We are breaking ground with our technogy.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted style={{lineHeight:'1.8',fontSize:'1.2em'}}">
        <div className="col-6 p-5">
          <p>
            We kick-started oprations on the 5th of August, 2010 with the goal
            of breakingall barriors that traders and investers face in India in
            term of cost,support and technology. We named the company Zerodha, a
            combination of zero and "Radha", the sanskrit word for barrier.
          </p>
          <p>
            Today our disruptive pricing models and in house technology have
            made us the bigest stock brocker in India.
          </p>
          <p>
            Over 1+ crore clints place millions of orders every day through our
            powerful ecosystem of investment plateforms ,contributing over 15%
            of all Indian retaoil trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community intiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech found and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And, yet always up to something new everyday. Catch up on the latest
            update on our blogs or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
