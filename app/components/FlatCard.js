import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

const FlatCard = ({ item }) => {
    const {thumbnail, title, desc} = item;
    return (
        <View style={styles.container}>
            <Image 
            source={{uri: thumbnail}} style= {styles.image} />
            <View style={styles.contentContainer}>
                <Title numberOfLines={3} size={25}>
                     {title}
                </Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: 'white',
     borderRadius: 8,
     overflow: 'hidden',
     marginBottom: 10
   },
   image: {
    flex: 0.35,
    height: '100%'
   },
   contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5
   }
});

export default FlatCard;