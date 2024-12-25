import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const items = [
  {
    id: '1',
    author: "John Doe",
    description: "This is a classic novel book",
    name: 'Classic Novel Book',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '2',
    author: "Jane Doe",
    description: "This is a ceramic coffee mug",
    name: 'Ceramic Coffee Mug',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '3',
    author: "John Doe",
    description: "This is an iPhone 14 Pro Case",
    name: 'iPhone 14 Pro Case',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '4',
    author: "John Doe",
    description: "This is a round sunglasses",
    name: 'Round Sunglasses',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '5',
    author: "John Doe",
    description: "This is an iPhone 13 Silicone Case",
    name: 'iPhone 13 Silicone Case',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '6',
    author: "John Doe",
    description: "This is a pair of reading glasses",
    name: 'Reading Glasses',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '7',
    author: "John Doe",
    description: "This is a poetry collection",
    name: 'Poetry Collection',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '8',
    author: "John Doe",
    description: "This is a travel mug",
    name: 'Travel Mug',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>123</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
