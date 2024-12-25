import { Button, View,  ScrollView,Image, StyleSheet, Text } from "react-native";
import React from "react"
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';



const ProfileFirstScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
    <ScrollView> 

        <View style={styles.container}>

       <Image source={require('../../assets/imageprofile.png')} style={styles.profileImage}/>  
       <Text style={styles.sectionTitle}>John Doe</Text>
      <Button 
       title="contact details"
        color="gray"
        onPress={() => alert(' phone number: 55033822 \n email: johndoe@gmail.com')}
     
      />
      
  <Button 
       title="Edit Profile"
        color="gray"
        onPress={() => {
            navigation.navigate("ProfileScreen")}}
     
      />
  
       
          
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'purple'}}>My items:</Text> 
        
        <View style={styles.itemContainer}>  
      <Image source={{uri: 'https://img.ltwebstatic.com/images3_spmp/2024/10/07/b7/1728294950dd17c621deaff99ae06a5ca15dcf685f_thumbnail_336x.png'}} style={styles.image} />
        
   
      <Button 
       title="Lunch Box
        $5.99"
        color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 0})}}
     
      />
       
        
       <Image source={{uri: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}} style={styles.image} />
      <Button 
        title="Ceramic Coffee Mug
        $12.99"
          color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 1})
        }}
      />

<Image source={{uri: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}} style={styles.image} />
      <Button 
        title="iPhone 14 Pro Case
        $24.99"
          color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 2})
        }}
      />



      </View>
    </View>
    </ScrollView>
    </SafeAreaProvider>

  );
};

export default ProfileFirstScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      
        
        },
        itemContainer: {
           
            margin: 8,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
          },
        image: {
            width: 150,
            height: 100,
        
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: 'purple',  
            flexDirection: 'row',
        },
        profileImage: {
            flexDirection: 'row',
            width: 100,
            height: 100,
            borderRadius: 50,
            paddingTop: 10,
            paddingLeft: 10,
        
    
        },
});
