import React from 'react';
import Catalog from './Catalog';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import { Text } from 'react-native';


function MainComponent() {

    
    return (
        <div > {/* 주요 컨테이너 */}

            <div> {/* Catalog 컨테이너 */}
                <Catalog />
            </div>
        
        </div>
    );
}

export default MainComponent;
