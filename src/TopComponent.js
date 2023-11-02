import React from 'react';
import { Image, Text } from 'react-native';

const text_style = {
    fontWeight: 'bold',
};

function topComponent() {
    return (
        <div>
        <div className='Top'>
            술팖
        </div>
            <Text style={text_style}>
                카카오뱅크 3333-08-6928690 박주환
            </Text>
        </div>
    );
}

export default topComponent;
