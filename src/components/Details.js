import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Details = ({route}) => {
    const {id} = route.params
  return (
    <View style={styles.container}>
      <Text>Details {id}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
