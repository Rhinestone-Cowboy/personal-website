import React, { useState } from "react"
import './Projects.css'
import { useSpring, animated } from "react-spring";


const Projects = () => {

    const initialPositions = {
        component1: { x: 150, y: -40, isReverse: false },
        component2: { x: 0, y: -40, isReverse: false },
        component3: { x: -150, y: -40  , isReverse: false },
    };
    const [positions, setPositions] = useState(initialPositions);
    const [activeComponent, setActiveComponent] = useState(null);






    const descConfig = { tension: 500, friction: 35  };

    const springDesc1 = useSpring({
        from: {opacity: 0},
        to: positions.component1.isReverse ? [
                {transform: 'scale(0.0)'},
            ]:[
                {delay: activeComponent === 'compo1' ? 650 : 0},
                {opacity: activeComponent === 'compo1' ? 1 : 0},
                {transform: activeComponent === 'compo1' ? 'scale(1.0)' : 'scale(0.0)'},
            ],
        config: { tension: 500, friction: 35  }
    });

    const springDesc2 = useSpring({
        from: {opacity: 0},
        to: positions.component2.isReverse ? [
            {transform: 'scale(0.0)'},
        ]:[
            {delay: activeComponent === 'compo2' ? 850 : 0},
            {opacity: activeComponent === 'compo2' ? 1 : 0},
            {transform: activeComponent === 'compo2' ? 'scale(1.0)' : 'scale(0.0)'},
        ],
        config: descConfig

    });

    const springDesc3 = useSpring({
        from: {opacity: 0},
        to: positions.component3.isReverse ? [
            {transform: 'scale(0.0)'},
        ]:[
            {delay: activeComponent === 'compo3' ? 650 : 0},
            {opacity: activeComponent === 'compo3' ? 1 : 0},
            {transform: activeComponent === 'compo3' ? 'scale(1.0)' : 'scale(0.0)'},
        ],
        config: descConfig

    });

    const moveComponentOneUp = () => {

        console.log('compo1');
        setPositions({
          component1: {
            x: initialPositions.component1.x - 150,
            y: initialPositions.component1.y - 100,
            isReverse: false,
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y + 140,
            isReverse: (activeComponent === 'compo2'),
          },
          component3: {
            x: initialPositions.component3.x,
            y: initialPositions.component3.y + 140,
            isReverse: (activeComponent === 'compo3'),
          },
        });
        setActiveComponent('compo1');
      };

      const moveComponentTwoUp = () => {
        console.log('compo2');
        setPositions({
          component1: {
            x: initialPositions.component1.x,
            y: initialPositions.component1.y + 140,
            isReverse: (activeComponent === 'compo1'),
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y - 100,
            isReverse: false,
          },
          component3: {
            x: initialPositions.component3.x,
            y: initialPositions.component3.y + 140,
            isReverse: (activeComponent === 'compo3'),
          },
        });
        setActiveComponent('compo2');
      };

      const moveComponentThreeUp = () => {

        console.log('compo3');
        setPositions({
          component1: {
            x: initialPositions.component1.x,
            y: initialPositions.component1.y + 140,
            isReverse: (activeComponent === 'compo1'),
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y + 140,
            isReverse: (activeComponent === 'compo2'),
          },
          component3: {
            x: initialPositions.component3.x + 150,
            y: initialPositions.component3.y - 100,
            isReverse: false,
          },
        });
        setActiveComponent('compo3');
      };

      const iconSetup = { tension: 1000, friction: 40 };



      
      const getSpringProps = (compID) => {

        if (compID === 'compo1') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component1.isReverse ? 
                [
                    { opacity: 1},
                    { x: positions.component1.x },
                    { y:  positions.component1.y},

                ]:[
                    { y:  positions.component1.y},
                    { x: positions.component1.x },
                    { opacity: activeComponent === 'compo1' ? 0 : 1}
                ],
                config: iconSetup
            };
            if (positions.component1.isReverse) { positions.component1.isReverse = false };
            return springProps;
        } else if (compID === 'compo2') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component2.isReverse ? 
                [
                    { opacity: 1},
                    { x: positions.component2.x },
                    { y:  positions.component2.y},
                ]:[
                    {delay: activeComponent === 'compo2' ? 500 : 0},
                    { y:  positions.component2.y},
                    { x: positions.component2.x },
                    { opacity: activeComponent === 'compo2' ? 0 : 1}
                ],
                config: iconSetup 
            };
            if (positions.component2.isReverse) { positions.component2.isReverse = false };
            return springProps;

         } else if (compID === 'compo3') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component3.isReverse ? 
                [
                    { opacity: 1},
                    { x: positions.component3.x },
                    { y:  positions.component3.y},
                ]:[
                    { y:  positions.component3.y},
                    { x: positions.component3.x },
                    { opacity: activeComponent === 'compo3' ? 0 : 1}
                ],
                config: iconSetup

                
            };
            if (positions.component3.isReverse) { positions.component3.isReverse = false };
            return springProps;
        }
       };
       
    const springProps1 = useSpring(getSpringProps('compo1'));
    const springProps2 = useSpring(getSpringProps('compo2'));
    const springProps3 = useSpring(getSpringProps('compo3'));


    const fadingTextProp = useSpring ({
      from: {opacity: 1}, 
      to: (activeComponent === null) ? {opacity: 1} : {transform: 'scale(0.0)'},
      
    });
    console.log(activeComponent);
    console.log(activeComponent===null);



    return(
        <div className='project-container'>

            <animated.div className='project-desc' style={{...springDesc1}}>
                TEST
            </animated.div>
            <animated.div className='project-desc' style={{...springDesc2}}>
                HELLOOO
            </animated.div>
            <animated.div className='project-desc' style={{...springDesc3}}>
                GOOODBYEEE
            </animated.div>



            <div className="project-icons">

                <animated.div onClick={moveComponentOneUp} style={{...springProps1,
                                                    position: 'absolute'}}>
                    <button className="icon-btn">
                      <img src="icons/misc.svg" alt="miscellaneous projects" width="128" height="128" />
                    </button>
                </animated.div>
                <animated.div onClick={moveComponentTwoUp} style={{...springProps2,
                                                    position: 'absolute'}}>
                    <button className="icon-btn">
                      <img src="icons/code.svg" alt="software projects" width="128" height="128" />
                    </button>     
                  </animated.div>
                <animated.div onClick={moveComponentThreeUp} style={{...springProps3,
                                                    position: 'absolute'}}>
                    <button className="icon-btn">
                    <img src="icons/robot.svg" alt="robotics projects" width="128" height="128" />
                    </button>
                </animated.div>
            </div>

            <animated.div style={{...fadingTextProp}} className='project-instr'>
                  click to expand
            </animated.div>
        </div>
    );
}

export default Projects;