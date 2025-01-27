const Service = ()=>{
    return (
   <section className="service-area">
  <div className="custom-container">
    <div className="service-section-header section-header d-flex align-items-end justify-content-between">
      <div className="left">
        <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
        <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
      </div>
      <p>One fundamental aspect of IT services is infrastructure management. This involves the design,
        implementation, and maintenance of the hardware, software, networks, and servers.</p>
    </div>
    <div className="services-list d-flex">
      <div className="service-card simple-shadow">
        <img src="/assets/imgs/service-icon-1.svg" alt="Service Icon" className="service-icon" />
        <h3><a href="/service-details.html">Development</a></h3>
        <p>Our development is pixel perfect in all ways.</p>
      </div>
      <div className="service-card simple-shadow">
        <img src="/assets/imgs/service-icon-2.svg" alt="Service Icon" className="service-icon" />
        <h3><a href="/service-details.html">Woo Commerce</a></h3>
        <p>We have a best team for your shopping websites.</p>
      </div>
      <div className="service-card simple-shadow">
        <img src="/assets/imgs/service-icon-3.svg" alt="Service Icon" className="service-icon" />
        <h3><a href="/service-details.html">CRM Solutions</a></h3>
        <p>We enhance customer experiences for success.</p>
      </div>
      <div className="service-card simple-shadow">
        <img src="/assets/imgs/service-icon-4.svg" alt="Service Icon" className="service-icon" />
        <h3><a href="/service-details.html">Web Design</a></h3>
        <p>We create vibrant, intuitive and minimalist web</p>
      </div>
      <div className="service-card simple-shadow">
        <span className="service-badge">Free!</span>
        <img src="/assets/imgs/service-icon-5.svg" alt="Service Icon" className="service-icon" />
        <h3><a href="/service-details.html">IT Support</a></h3>
        <p>We offers expert assistance for your IT issues.</p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Service ;