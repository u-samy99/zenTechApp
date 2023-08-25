import React from "react";
import {Text} from 'react-native';

const Title = ({children, numberOfLines = 2, size= 18}) => {
    return (
        <Text
         numberofLines={numberOfLines}
         style={{ fontWeight: 'bold', fontSize: size, backgroundColor:'#FEFEE2', alignSelf:'flex-start'}}     
        >
         {children}
         </Text>
    );
};

export default Title;