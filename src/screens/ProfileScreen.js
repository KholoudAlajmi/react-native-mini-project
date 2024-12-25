
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from "react";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import imageprofile from '../../assets/imageprofile.png';


const ProfileScreen = ({route}) => {
  const [profile, setProfile] = useState({
    firstname: '',
    lastfirst: '',
    phone: '',
    email: '',
    profilePicture: null,
  });
  


  return(
    <SafeAreaProvider>
    <View style={styles.container}>


      <View> 
        <TouchableOpacity onPress={()=>alert("Do you want to change your profile image?")}>
          <Text style={styles.sectionTitle}>Change Profile Image</Text>
          
         </TouchableOpacity>
         <Image source={require('../../assets/imageprofile.png')} style={styles.profileImage}/>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Edit Profile</Text>
        <TextInput
          style={styles.inputField}
          placeholder="first name"
          value={profile.firstname}
          onChangeText={(text) => setProfile({ ...profile, firstname: text })}
        /> 
          <TextInput
          style={styles.inputField}
          placeholder="last first"
          value={profile.lastfirst}
          onChangeText={(text) => setProfile({ ...profile, lastfirst: text })}
        />  
        <TextInput
          style={styles.inputField}
          placeholder="Phone Number"
          value={profile.phone}
          onChangeText={(text) => setProfile({ ...profile, phone: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          value={profile.email}
          onChangeText={(text) => setProfile({ ...profile, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />
       <TextInput
          style={styles.inputField}
          placeholder="password"
          value={profile.password}
          onChangeText={(text) => setProfile({ ...profile, password: text })}
          secureTextEntry
        />


      <Button 
        title="Logout"
        color="purple"
        onPress={()=>alert("Are you sure?")}
      />

        
      </View>
      </View>
      </SafeAreaProvider>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 20,
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'purple',
  },
  profileImage: {
    width: 180,
    height: 180,
    marginLeft: 10,
  },
});
