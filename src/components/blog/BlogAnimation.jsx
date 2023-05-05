import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";
import { useTranslation } from "react-i18next";


Modal.setAppElement("#root");

const Blog = () => {

  const [ t, i18n ] = useTranslation( "global" );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img src={`img/blog/blog1.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">27/ABR/2023 - DIANA RIOS </div>
              <h6>
                <a>
                  { t( "blog.blog1.title" ) }
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/blog2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">26/AGO/2022 - POR FRANKLIN</div>
              <h6>
                <a>
                  { t( "blog.blog2.title" ) }
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/blog3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">09/MAY/2022 - MIGUEL ÁNGEL</div>
              <h6>
                <a>
                  { t( "blog.blog3.title" ) }
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img src={`img/blog/blog4.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">01/FEB/2020 - ED TEAM</div>
              <h6>
                <a>
                  { t( "blog.blog4.title" ) }
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      { t( "blog.blog1.title" ) }
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer1.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>DIANA RIOS</label>
                        <span>27 ABRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>{ t( "blog.blog1.p1" ) }</p>
                    <h4>{ t( "blog.blog1.subtitle1" ) }</h4>
                    <p>{ t( "blog.blog1.p2" ) }</p>
                    <p>{ t( "blog.blog1.p3" ) }</p>
                    <h4>{ t( "blog.blog1.subtitle2" ) }</h4>
                    <p>{ t( "blog.blog1.p4" ) }</p>
                    <p>{ t( "blog.blog1.p5" ) }</p>
                    <blockquote>
                      <p>{ t( "blog.blog1.p6" ) }</p>
                    </blockquote>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Development</li>
                    <li href="#">Programming</li>
                    <li href="#">Begginer</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>{ t( "blog.comment" ) }</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>{ t( "blog.blog2.title" ) }</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer2.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>FRANKLIN MARTINEZ</label>
                        <span>26 AGO 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>{ t( "blog.blog2.p1" ) }</p>
                    <h4>{ t( "blog.blog2.subtitle1" ) }</h4>
                    <p>{ t( "blog.blog2.p2" ) }</p>
                    <h4>{ t( "blog.blog2.subtitle2" ) }</h4>
                    <ul>
                      <li>{ t( "blog.blog2.li1" ) }</li>
                      <li>{ t( "blog.blog2.li2" ) }</li>
                      <li>
                        { t( "blog.blog2.li3" ) }
                        <li>{ t( "blog.blog2.li4" ) }</li>
                      </li>
                      <li>{ t( "blog.blog2.li5" ) }</li>
                      <li>{ t( "blog.blog2.li6" ) }</li>
                    </ul>
                    <p>
                      { t( "blog.blog2.p3" ) }
                    </p>
                    <blockquote>
                      <p>{ t( "blog.blog2.p4" ) }</p>
                    </blockquote>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Zustand</li>
                    <li href="#">Development</li>
                    <li href="#">React</li>
                    <li href="#">Redux</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>{ t( "blog.comment" ) }</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>{ t( "blog.blog3.title" ) }</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer3.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>MIGUEL ANGEL DE DIOS</label>
                        <span>09 MAY 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>{ t( "blog.blog3.p1" ) }</p>
                    </blockquote>
                    <p>{ t( "blog.blog3.p2" ) }</p>
                    <h4>{ t( "blog.blog3.subtitle1" ) }</h4>
                    <p>{ t( "blog.blog3.p3" ) }</p>
                    <ul>
                      <li>{ t( "blog.blog3.li1" ) }</li>
                      <li>{ t( "blog.blog3.li2" ) }</li>
                      <li>{ t( "blog.blog3.li3" ) }</li>
                      <li>{ t( "blog.blog3.li4" ) }</li>
                    </ul>
                    <h4>{ t( "blog.blog3.subtitle2" ) }</h4>
                    <p>{ t( "blog.blog3.p4" ) }</p>
                    <ol>
                      <li>{ t( "blog.blog3.li5" ) }</li>
                      <li>{ t( "blog.blog3.li6" ) }</li>
                      <li>{ t( "blog.blog3.li7" ) }</li>
                      <li>{ t( "blog.blog3.li8" ) }</li>
                      <li>{ t( "blog.blog3.li9" ) }</li>
                    </ol>
                    <h4>{ t( "blog.blog3.subtitle3" ) }</h4>
                    <p>{ t( "blog.blog3.p5" ) }</p>
                    <ul>
                      <li>{ t( "blog.blog3.li10" ) }</li>
                      <li>{ t( "blog.blog3.li11" ) }</li>
                      <li>{ t( "blog.blog3.li12" ) }</li>
                      <li>{ t( "blog.blog3.li13" ) }</li>
                    </ul>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Scrum</li>
                    <li href="#">Development</li>
                    <li href="#">Work</li>
                    <li href="#">Organization</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>{ t( "blog.comment" ) }</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog4.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>{ t( "blog.blog4.title" ) }</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer4.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>ED TEAM</label>
                        <span>01 FEB 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>{ t( "blog.blog4.p1" ) }</p>
                    <p>{ t( "blog.blog4.p2" ) }</p>
                    <h4>{ t( "blog.blog4.subtitle1" ) }</h4>
                    <p>{ t( "blog.blog4.p3" ) }</p>
                    <h4>{ t( "blog.blog4.subtitle2" ) }</h4>
                    <p>{ t( "blog.blog4.p4" ) }</p>
                    <p>{ t( "blog.blog4.p5" ) }</p>
                    <h4>{ t( "blog.blog4.subtitle3" ) }</h4>
                    <p>{ t( "blog.blog4.p6" ) }</p>
                    <p>{ t( "blog.blog4.p7" ) }</p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Development</li>
                    <li href="#">Frontend</li>
                    <li href="#">Web Design</li>
                    <li href="#">Backend</li>
                    <li href="#">Web</li>
                    <li href="#">API</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>{ t( "blog.comment" ) }</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default Blog;
