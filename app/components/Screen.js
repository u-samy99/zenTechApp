import React from 'react';
import {TextInput, StyleSheet, ScrollView} from 'react-native';

const Screen = ({children}) => {
    return(
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        paddingHorizontal: 25,
        backgroundColor: '#aeaef5',
        flex: 1,
    },
})

export default Screen;