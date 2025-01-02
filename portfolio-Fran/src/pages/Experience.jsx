import React from 'react';
import './About.css'

import { TabSection } from '../components/Components';
 
// Usarlos en tu componente

const Experience = () => {
    return (
        
        <section className="Flex" id="experience">
        <div id="experience">
            <div className="numbered-heading">
                <h2 className="title-section">
                Where I’ve Worked
                </h2>
            </div>
            <TabSection/>
        </div>
        
        </section>
        
    );
};

export default Experience;