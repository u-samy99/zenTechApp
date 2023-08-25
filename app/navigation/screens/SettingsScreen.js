import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';
import {} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



import Ionicons from 'react-native-vector-icons/Ionicons';



const Separator = () => <View style={styles.separator} />;

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.containerofcontainer}>
      <MaterialIcons style={styles.myicon} name="account-circle" size={24} color="black" />  
      <Button
        title="Account Infos"
        color="black"
        onPress={() => Alert.alert('Data Not Available')}
      />
      <AntDesign style={styles.icon} name="arrowright" size={24} color="black" />
    </View>
    <Separator />
    <View style={styles.containerofcontainer}>
      <MaterialIcons style={styles.myicon} name="room-preferences" size={24} color="black" />  
      <Button
        title="Preferences"
        color="black"
        onPress={() => Alert.alert('Data Not Available')}
      />
      <AntDesign style={styles.icon} name="arrowright" size={24} color="black" marginLeft={20}/>
    </View>
    <Separator />
    <View style={styles.containerofcontainer}>
      <MaterialIcons style={styles.myicon} name="language" size={24} color="black" />  
      <Button
        title="Languages"
        color="black"
        onPress={() => Alert.alert('Data Not Available')}
      />
      <AntDesign style={styles.icon} name="arrowright" size={24} color="black" marginLeft={26}/>
    </View>
    <Separator />
    <View style={styles.containerofcontainer}>
      <MaterialIcons style={styles.myicon} name="notifications" size={24} color="black" />  
      <Button
        title="Notifications"
        color="black"
        onPress={() => Alert.alert('Data Not Available')}
      />
      <AntDesign style={styles.icon} name="arrowright" size={24} color="black" marginLeft={13}/>
    </View>
    <Separator />
    <View style={styles.containerofcontainer}>
      <MaterialCommunityIcons style={styles.myicon} name="cookie-outline" size={24} color="black" />  
      <Button
        title="Cookies"
        color="black"
        onPress={() => Alert.alert('Data Not Available')}
      />
      <AntDesign style={styles.icon} name="arrowright" size={24} color="black" marginLeft={49}/>
    </View>
    <Separator />
    <View>
        <Text style={styles.bottomText}>
            Version 1.32.0 (13272)
        </Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerofcontainer: {
    flexDirection: "row"
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    paddingLeft: 165
  },
  myicon: {
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 7
  },
  bottomText: {
    color: "#7c8080",
    justifyContent: "center",
    alignContent: 'center',
    marginLeft: 95,
    marginTop: 180,
    paddingTop: 120

  },
});

export default SettingsScreen;