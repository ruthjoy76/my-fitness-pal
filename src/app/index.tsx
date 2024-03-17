import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({item}) =>{
  return (
    <View 
        style={{
          backgroundColor: '#4cacef', 
          padding: 10, 
          borderRadius: 5, 
          gap: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ flex:1, gap: 5}}>
          <Text style={styles.text}>{item.label}</Text>
          <Text style={{color: '#f1f1f1'}}>{item.cal}, {item.brand}</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="#f1f1f1" />
      </View>
  )
}

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
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
