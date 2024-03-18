import { StyleSheet, View, FlatList } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  {label: "Pizza", cal: 350, brand: 'Dominos'},
  {label: "Apple", cal: 75, brand: 'Generic'},
  {label: "Coffee", cal: 105, brand: 'Americano'}
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FlatList
        data={foodItems}
        renderItem={({item}) => <FoodListItem  item={item}/>}
        contentContainerStyle= {{gap: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

});
