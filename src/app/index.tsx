import { StyleSheet, View, FlatList, TextInput, Text, Button } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';



const foodItems = [
  {label: "Pizza", cal: 350, brand: 'Dominos'},
  {label: "Apple", cal: 75, brand: 'Generic'},
  {label: "Coffee", cal: 105, brand: 'Americano'},
  {label: "Cake", cal: 125, brand: 'Chocolate'}
];

export default function App() {
  const [search, setSearch] = useState('');
 
  const performSearch = () => {
    console.warn("Searching for", search);

    setSearch('');
  }
  return (
    <View style={styles.container}>
     <TextInput 
        value={search} 
        onChangeText={setSearch}
        placeholder='Search...' 
        style={styles.input}
     />
   
    {search &&  < Button title="Search" onPress={performSearch} />}
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
    gap: 10
  },

  input:{
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
  }

});
