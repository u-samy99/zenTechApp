import React from "react";
import {Text} from 'react-native';

const Subtitle = ({children, numberOfLines = 2, size= 15}) => {
    return (
        <Text
         numberofLines={numberOfLines}
         style={{ fontWeight: 'normal', fontSize: size}} 
        >
         {children}
         </Text>
    );
};

export default Subtitle;