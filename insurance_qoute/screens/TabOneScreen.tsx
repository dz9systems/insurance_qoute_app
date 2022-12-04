import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TextInput, Button } from "react-native";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
      // onChangeText={''}
      // value={''}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      // onChangeText={''}
      // value={''}
      />
      <button
        style={styles.button}
        onClick={()=> console.log('button pressed!!')}
      >
        Submit
      </button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
   width:100,
   height:30,
   backgroundColor:'#373535',
   color:'white',
  },
});
