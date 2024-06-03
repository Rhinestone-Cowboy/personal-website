import React, { act, useState } from "react"
import './Projects.css'
import CircleImage from '../CircleImage/CircleImage';
import { useSpring, animated, config } from "react-spring";


const Projects = () => {

    const initialPositions = {
        component1: { x: 150, y: 0, isReverse: false },
        component2: { x: 0, y: 0, isReverse: false },
        component3: { x: -150, y: 0, isReverse: false },
    };
    const [positions, setPositions] = useState(initialPositions);
    const [activeComponent, setActiveComponent] = useState(null);

    const moveComponentOneUp = () => {
        setPositions({
          component1: {
            x: initialPositions.component1.x - 150,
            y: initialPositions.component1.y - 100,
            isReverse: false,
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y + 100,
            isReverse: (activeComponent === 'compo2'),
          },
          component3: {
            x: initialPositions.component3.x,
            y: initialPositions.component3.y + 100,
            isReverse: (activeComponent === 'compo3'),
          },
        });
        setActiveComponent('compo1');
      };

      const moveComponentTwoUp = () => {
        setPositions({
          component1: {
            x: initialPositions.component1.x,
            y: initialPositions.component1.y + 100,
            isReverse: (activeComponent === 'compo1'),
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y - 100,
            isReverse: false,
          },
          component3: {
            x: initialPositions.component3.x,
            y: initialPositions.component3.y + 100,
            isReverse: (activeComponent === 'compo3'),
          },
        });
        setActiveComponent('compo2');
      };

      const moveComponentThreeUp = () => {

        setPositions({
          component1: {
            x: initialPositions.component1.x,
            y: initialPositions.component1.y + 100,
            isReverse: (activeComponent === 'compo1'),
          },
          component2: {
            x: initialPositions.component2.x,
            y: initialPositions.component2.y + 100,
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

      
      const getSpringProps = (compID) => {
        if (compID == 'compo1') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component1.isReverse ? 
                [
                    { opacity: 1},
                    { x: positions.component1.x },
                    { y:  positions.component1.y},
                    
                ]
                :
                [
                    { y:  positions.component1.y},
                    { x: positions.component1.x },
                    { opacity: activeComponent === 'compo1' ? 0 : 1}
                ],
                config: config.stiff
        
                
                
            };
            console.log(positions.component1.isReverse);
            if (positions.component1.isReverse) { positions.component1.isReverse = false };
            return springProps;

        } else if (compID == 'compo2') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component2.isReverse ? 
                [

                    { opacity: 1},
                    { x: positions.component2.x },
                    { y:  positions.component2.y},
                ]
                :
                [
                    {delay: activeComponent == 'compo2' ? 500 : 0},
                    { y:  positions.component2.y},
                    { x: positions.component2.x },
                    { opacity: activeComponent === 'compo2' ? 0 : 1}
                ],
                config: config.stiff

                
            };
            console.log(positions.component2.isReverse);
            if (positions.component2.isReverse) { positions.component2.isReverse = false };
            return springProps;

         } else if (compID == 'compo3') {
            const springProps = {
                from: { x: initialPositions.component1.x, y: initialPositions.component1.y },
                to: positions.component3.isReverse ? 
                [
                    { opacity: 1},
                    { x: positions.component3.x },
                    { y:  positions.component3.y},
                ]
                :
                [
                    { y:  positions.component3.y},
                    { x: positions.component3.x },
                    { opacity: activeComponent === 'compo3' ? 0 : 1}
                ],
                config: config.stiff

                
            };
            console.log(positions.component3.isReverse);
            if (positions.component3.isReverse) { positions.component3.isReverse = false };
            return springProps;
        }
       };
      
  
      const springProps1 = useSpring(getSpringProps('compo1'));
    
      const springProps2 = useSpring(getSpringProps('compo2'));
    
      const springProps3 = useSpring(getSpringProps('compo3'));
      console.log(activeComponent);

    //    console.log('1');
       console.log(springProps1);
    //    console.log('2');
    //    console.log(springProps2);
    //    console.log('3');
    //    console.log(springProps3);







    return(
        <div className='project-container'>

            <div className='project-desc'>

            </div>

            <div className="project-icons">

                <animated.div onClick={moveComponentOneUp} style={{...springProps1,
                                                    position: 'absolute'}}>
                    <CircleImage src="icons/email.svg" alt="diego-padilla-picture" size='128px' />
                </animated.div>
                <animated.div onClick={moveComponentTwoUp} style={{...springProps2,
                                                    position: 'absolute'}}>
                    <CircleImage src="icons/email.svg" alt="diego-padilla-picture" size='128px' />
                </animated.div>
                <animated.div onClick={moveComponentThreeUp} style={{...springProps3,
                                                    position: 'absolute'}}>
                    <CircleImage src="icons/email.svg" alt="diego-padilla-picture" size='128px' />
                </animated.div>


            </div>
        </div>);
}

export default Projects;