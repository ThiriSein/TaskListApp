import HomePage from './components/HomePage';
import { StyleSheet, Text, View } from 'react-native';
import DatePIC from './components/DatePIC';
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      {/*<DatePIC/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
