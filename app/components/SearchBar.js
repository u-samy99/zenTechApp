import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {} from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchBar = () => {
    return(
        <View style={styles.container}  >
            <TextInput style={styles.searchInput} placeholder='Search here..' />
            <Ionicons style={styles.iconSearch} name="md-search" size={28} color="#9c9cb8" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop : 20,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius : 8,
        justifyContent: 'center',
        flexDirection: "row"
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft: 40,
        fontSize: 16
    },
    iconSearch:{
        paddingTop: 11,
        paddingRight: 40
    }

})

export default SearchBar;