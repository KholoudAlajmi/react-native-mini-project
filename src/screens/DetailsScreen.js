import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const details = [
    {
      id: '1',
      author: "John ",
      description: "This is a baige lunch box",
      name: 'Lunch Box',
      price: '$5.99',
      image: 'https://img.ltwebstatic.com/images3_spmp/2024/10/07/b7/1728294950dd17c621deaff99ae06a5ca15dcf685f_thumbnail_336x.png',
    },
    {
      id: '2',
      author: "John",
      description: "This is a ceramic coffee mug with a beautiful design",
      name: 'Ceramic Coffee Mug',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: '3',
      author: "John",
      description: "This is an iPhone 14 Pro Case with a beautiful design",
      name: 'iPhone 14 Pro Case',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: '4',
      author: "lubna",
      description: "This is a round sunglasses, will protect your eyes from the sun",
      name: 'Round Sunglasses',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: '5',
      author: "marwa",
      description: "This is an iPhone 13 Silicone Case, will protect your phone from scratches",
      name: 'iPhone 13 Silicone Case',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: '6',
      author: "Bander",
      description: "This is a pair of reading glasses, will help you read better",
      name: 'Reading Glasses',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: '7',
      author: "Deema",
      description: "This is a rollable brown table with a beautiful design",
      name: 'table',
      price: '$10.5',
      image: 'https://img.ltwebstatic.com/images3_spmp/2023/12/21/a6/1703167896ca51a6fe2ea3b9a49c8ac0f84abaa3e8_thumbnail_720x.jpg',
    },
  ];

const DetailsScreen = ({route}) => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>  
        <Text style={styles.title}>{details[route.params.id].author}</Text>
      <Text style={styles.name}>{details[route.params.id].name}</Text>  
      <Text style={styles.price}>{details[route.params.id].price}</Text>
    
      <Text style={styles.description}>{details[route.params.id].description}</Text>
    
      <Image source={{uri: details[route.params.id].image}} style={styles.image} />

    </View>
    </SafeAreaProvider>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

      },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        color: 'purple',
        marginBottom: 20,
     
    },
    image: {
        width: 400,
        height: 390,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        marginTop: 100,
        borderRadius: 30,
    },
    description: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        color: 'gray',
        marginBottom: 10,
    
    },
    price: {
        fontSize: 15,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        color: 'gray',
       
    },
    name: {
        fontSize: 15,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        color: 'gray',
      
    },
});

