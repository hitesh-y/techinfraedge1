import Link from "next/link";

const Howwedo = ()=>{
    return (
  <section className="how-we-do-area">
  <div className="custom-container">
    <div className="custom-row">
      <img src="/assets/imgs/bg-shape-1.svg" alt="Shape" className="animation-slide-left how-we-do-bg" />
      <div className="how-we-do-left-content">
        <div className="top">
          <h5 className="section-subtitle">Our Model</h5>
          <h1 className="section-title">How we do</h1>
          <p>Save time and money with our powerful method.</p>
        </div>
        <Link href="/how-we-do" className="theme-btn">
          Learn More
          <i className="iconoir-arrow-up-right" />
        </Link>
      </div>
      <div className="how-we-do-right-content">
        <div className="how-we-do-items d-flex align-items-center justify-content-center">
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-1.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>Brainstroming</h4>
              <p>Ideas</p>
            </div>
          </div>
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-2.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>Product</h4>
              <p>Design</p>
            </div>
          </div>
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-3.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>Front-End</h4>
              <p>Development</p>
            </div>
          </div>
        </div>
        <div className="how-we-do-items d-flex align-items-center justify-content-center">
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-4.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>SEO</h4>
              <p>Optimization</p>
            </div>
          </div>
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-5.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>Back-End</h4>
              <p>Development</p>
            </div>
          </div>
        </div>
        <div className="how-we-do-items d-flex align-items-center justify-content-center">
          <div className="how-we-do-card">
            <div className="circle-shape" />
            <div className="line-shape" />
            <div className="how-we-do-icon">
              <img src="/assets/imgs/hwd-icon-6.svg" alt="How we do" />
            </div>
            <div className="how-we-do-content">
              <h4>Digital</h4>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Howwedo ;