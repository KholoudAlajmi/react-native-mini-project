import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';



const AddItemScreen = () => {
  const [newItem, setNewItem] = useState({
    author: '',
    description: '',
    itemName: '',
    price: '',
    itemImage: '',
  });

  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Add Your item Here</Text>
    
    <TextInput
      style={styles.inputField}
      placeholder="author"
      value={newItem.author}
      onChangeText={(text) => setNewItem({ ...newItem, author: text })}
     
    /> 
      <TextInput
      style={styles.inputField}
      placeholder="Description"
      value={ newItem.description}
      onChangeText={(text) => setNewItem({ ...newItem, description: text })}
 
    />  
    <TextInput
      style={styles.inputField}
      placeholder="Item Name"
      value={newItem.Itemname}
      onChangeText={(text) => setNewItem({ ...newItem, itemName: text })}
     
    />
    <TextInput
      style={styles.inputField}
      placeholder="Price"
      value={newItem.price}
      onChangeText={(number) => setNewItem({ ...newItem, price: number })}
      keyboardType="numeric"
    />
   <TextInput
      style={styles.inputField}
      placeholder="Item Image"
      value={newItem.itemImage}
      onChangeText={(url) => setNewItem({ ...newItem, itemImage: url})}
      keyboardType="url"

    />


  <Button 
    title="Add"
    color="purple"
    onPress={()=>alert("Are you sure, you want to add this item?")}
  />
  </View>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  inputField: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 100,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: 10,
  },
});


