const About = ()=>{
    return (
   <section className="about-area">
  <div className="custom-container">
    <div className="custom-row justify-content-between align-items-center">
      <div className="left-content">
        <h5 className="section-subtitle">CONSULTING EXCELLENCE</h5>
        <h1 className="section-title">Best pathway to our clients.</h1>
        <p>Our consulting process begins with a 
          thorough assessment of your current IT 
          infrastructure, workflows, and pain points.</p>
        <ul>
          <li>
            <i className="icon-check las la-check" /> 24/7 Full Service Support
          </li>
          <li>
            <i className="icon-check las la-check" /> Immediate Response
          </li>
          <li>
            <i className="icon-check las la-check" /> Easy to Approach us
          </li>
        </ul>
      </div>
      <div className="right-content">
        <div className="about-timeline">
          <div className="about-timeline-item">
            <div className="about-timeline-item-inner">
              <img src="/assets/imgs/bg-shape-2.svg" alt="Shape" className="line-shape" />
              <span className="number">01</span>
              <h3>Discovery and Analysis</h3>
              <p>Perform a analysis of the client's existing IT systems.</p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-item-inner">
              <img src="/assets/imgs/bg-shape-2.svg" alt="Shape" className="line-shape" />
              <span className="number">02</span>
              <h3>Tailored Solutions</h3>
              <p>Develop IT solutions based on the analysis phase.</p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-item-inner">
              <img src="/assets/imgs/bg-shape-2.svg" alt="Shape" className="line-shape" />
              <span className="number">03</span>
              <h3>Deployment and Support</h3>
              <p>Regularly communicate with our client to any concern.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default About ;