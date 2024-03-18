import { View, Text } from "react-native"
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
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20,}}>{item.label}</Text>
            <Text style={{color: '#f1f1f1'}}>{item.cal}, {item.brand}</Text>
          </View>
          <AntDesign name="pluscircleo" size={24} color="#f1f1f1" />
        </View>
    )
  }
   export default FoodListItem;
  