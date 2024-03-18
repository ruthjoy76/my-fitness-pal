import { StyleSheet, View, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({item}) =>{
    return (
      <View style={styles.container}>
          <View style={{ flex:1, gap: 5}}>
            <Text style={{ color: '#4cacef', fontWeight: 'bold', fontSize: 20,}}>{item.label}</Text>
            <Text style={{color: '#010101'}}>{item.cal}, {item.brand}</Text>
          </View>
          <AntDesign name="pluscircleo" size={24} color="#010101" />
        </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f8', 
        padding: 10, 
        borderRadius: 5, 
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    
  })
   export default FoodListItem;
  