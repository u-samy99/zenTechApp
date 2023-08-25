import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';
import {} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

import Ionicons from 'react-native-vector-icons/Ionicons';




const Separator = () => <View style={styles.separator} />;

const ContactUs = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        You can find us on Twitter by pressing that button.
      </Text>
      <Button
        title="Twitter"
        color="#04c8cf"
        onPress={() => Alert.alert('ZenTechTwit')}
      />
       <AntDesign style={styles.icon} name="twitter" size={24} color="#00acee" />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      You can find us on Instagram by pressing that button.

      </Text>
      <Button
        title="Instagram"
        color="#f194ff"
        onPress={() => Alert.alert('ZentechInst')}
      />
      <AntDesign style={styles.icon} name="instagram" size={24} color="#962fbf" />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        You can find us on Facebook by pressing that button.
      </Text>
      <Button
        title="Facebook"
        onPress={() => Alert.alert('ZenTechFcb')}
      />
      <AntDesign style={styles.icon} name="facebook-square" size={24} color="#3b5998" />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Not a fan of social medias? Send us an email or call us!
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Email1"
          color="#a6142f"
          onPress={() => Alert.alert('zentech@charika.ma')}
        />
        <Button
          title="Email2"
          color="#a6142f"

          onPress={() => Alert.alert('+212540230000')}
        />
      </View>
      <Separator />

      <View>
      <Text style={styles.title}>
        All interaction for the next button are disabled. Waiting for data.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
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
    margin: 12,
    paddingLeft: 145
  },
});

export default ContactUs;