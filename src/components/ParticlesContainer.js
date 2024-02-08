import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';



function ParticlesContainer() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        })
    }, [])
    
    

    const particlesLoaded = useCallback(async () => {

    }, [])

    const options = useMemo(() => ({
            fullScreen: {enable: false},
            background: {
                color: {
                    value: '',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 90,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
    
                    },
                } ,
            },
            particles: {
                color: {
                    value: '#EDB183'
                },
                links: {
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 0.75,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 400,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type:'circle',
                },
                size: {
                    value: {min: 1, max: 5},
                },
                detectRetina: true,
            }
    }), [])

    if(init) {
        return <Particles 
                    className={'w-full h-full absolute translate-z-0'} 
                    id='tsparticles' 
                    loaded={particlesLoaded}
                    options={options} 
                    />;
    }

    return <></>;
}

export default ParticlesContainer