import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "HTML5",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "CSS3",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "JavasCript",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "React JS",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "React Router",
    numberPercent: "50",
    startCount: "0",
    endCount: "50",
  },
  {
    name: "Material UI",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Node JS",
    numberPercent: "60",
    startCount: "0",
    endCount: "60",
  },
  {
    name: "SQL",
    numberPercent: "50",
    startCount: "0",
    endCount: "50",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
