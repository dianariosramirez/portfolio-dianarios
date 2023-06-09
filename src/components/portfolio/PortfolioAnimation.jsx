import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["Todo", "React", "Material UI", "Bootstrap", "Angular"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "img/portfolio/project-1.jpg",
        width: 400,
        height: 550,
        title: "Online Shop",
        subTitle: "Ceniza Mx",
        alterText: "Online Shop",
        delayAnimation: "",
        portfolioLink:
          "https://ceniza-mx-store.web.app/",
      },
      {
        img: "img/portfolio/project-2.jpg",
        width: 400,
        height: 400,
        title: "Facial Recognition",
        subTitle: "Smart Brain App",
        alterText: "Facial Recognition",
        delayAnimation: "100",
        portfolioLink:
          "https://dianariosramirez.github.io/smart-brain/",
      },
      {
        img: "img/portfolio/project-3.jpg",
        width: 400,
        height: 700,
        title: "React App",
        subTitle: "Robofriends",
        alterText: "React App",
        delayAnimation: "200",
        portfolioLink:
          "https://dianariosramirez.github.io/robotfriends/",
      }
    ],
  },
  {
    porftoliItems: [
      {
        img: "img/portfolio/project-1.jpg",
        width: 400,
        height: 550,
        title: "Online Shop",
        subTitle: "Ceniza Mx",
        alterText: "Online Shop",
        delayAnimation: "",
        portfolioLink:
          "https://dianariosramirez.github.io/ceniza-shop/",
      },
      {
        img: "img/portfolio/project-2.jpg",
        width: 400,
        height: 400,
        title: "Facial Recognition",
        subTitle: "Smart Brain App",
        alterText: "Facial Recognition",
        delayAnimation: "100",
        portfolioLink:
          "https://dianariosramirez.github.io/smart-brain/",
      },
      {
        img: "img/portfolio/project-3.jpg",
        width: 400,
        height: 700,
        title: "React App",
        subTitle: "Robofriends",
        alterText: "React App",
        delayAnimation: "200",
        portfolioLink:
          "https://dianariosramirez.github.io/robotfriends/",
      }
    ],
  },
  {
    porftoliItems: [
      {
        img: "img/portfolio/project-1.jpg",
        width: 400,
        height: 550,
        title: "Online Shop",
        subTitle: "Ceniza Mx",
        alterText: "Online Shop",
        delayAnimation: "",
        portfolioLink:
          "https://dianariosramirez.github.io/ceniza-shop/",
      }
    ],
  },
  {
    porftoliItems: [],  
  },
  {
    porftoliItems: [],  
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
