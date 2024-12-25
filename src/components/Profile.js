// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     firstname: '',
//     lastfirst: '',
//     phone: '',
//     email: '',
//     profilePicture: null,
//   });
  
//   return(
//     <View style={styles.container}>
//       <View>
//         <View>
//           <Icon name="person" size={80} color="#FF4B3A" />
//         </View>
        
//         <TouchableOpacity onPress={handleImagePick}>
//           <Text>
//             {profile.profilePicture ? 'Change Photo' : 'Add Photo'}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Edit Profile</Text>
       
       
//         <TextInput
//           style={styles.inputField}
//           placeholder="first name"
//           value={profile.firstname}
//           onChangeText={(text) => setProfile({ ...profile, firstname: text })}
//         /> 
//           <TextInput
//           style={styles.inputField}
//           placeholder="last first"
//           value={profile.lastfirst}
//           onChangeText={(text) => setProfile({ ...profile, lastfirst: text })}
//         />  
//         <TextInput
//           style={styles.inputField}
//           placeholder="Phone Number"
//           value={profile.phone}
//           onChangeText={(text) => setProfile({ ...profile, phone: text })}
//           keyboardType="phone-pad"
//         />
//         <TextInput
//           style={styles.inputField}
//           placeholder="Email"
//           value={profile.email}
//           onChangeText={(text) => setProfile({ ...profile, email: text })}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
      
//       </View>

//       <View style={styles.section}>

//         <TextInput
//           style={styles.inputField}
//           placeholder="password"
//           value={profile.password}
//           onChangeText={(text) => setProfile({ ...profile, password: text })}
//           secureTextEntry
//         />
//       </View>
//     </View>
//   );
// }

// export default Profile

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   section: {
//     padding: 20,
//   },
//   inputField: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     padding: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
// });




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Profile = ({route}) => {
    const {id} = route.params
  return (
    <View style={styles.container}>
      <Text>Profile {id}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
