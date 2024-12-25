import { Button,ImageButton , Text, View,  ScrollView,Image, StyleSheet } from "react-native";
import React from "react"
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
    <ScrollView> 
        <View style={styles.container}>
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

<Image source={{uri: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }} style={styles.image} />
       <Button 
        title="Round Sunglasses
        $29.99"
          color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 3})
        }}
      />

<Image source={{uri: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}} style={styles.image} />
       <Button 
        title="iPhone 13 Silicone Case
        $19.99"
          color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 4})
        }}
      />

<Image source={{uri: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}} style={styles.image} />
       <Button
        title="Reading Glasses
        $34.99" 
        color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 5})
            
        }}
      />

<Image source={{uri:'https://img.ltwebstatic.com/images3_spmp/2023/12/21/a6/1703167896ca51a6fe2ea3b9a49c8ac0f84abaa3e8_thumbnail_720x.jpg'}} style={styles.image} />
       <Button s
        title="Table
        $10.5"
          color="purple"
        onPress={() => {
            navigation.navigate("Details", {id: 6})
        }}
      />
      

      </View>
    </View>
    </ScrollView>
    </SafeAreaProvider>

  );
};

export default HomeScreen;

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
});
