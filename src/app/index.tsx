import { StyleSheet, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FoodListItem item={{label: "Pizza", cal: 350, brand: 'Dominos'}} />
      <FoodListItem item={{label: "Apple", cal: 75, brand: 'Generic'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    gap: 5,
  },

});
