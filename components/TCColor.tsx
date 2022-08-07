import { NavigationContainer } from "@react-navigation/native";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function TCColor() {
  const [selectedCC, setSelectedCC] = useState(null);
  const clickHandler = (index: any) => {
    setSelectedCC(index);
  };
  console.log("Selected color is ", selectedCC);

  const data = [
    {
      id: "1",
      //name: " yellow",
    },
    {
      id: "2",
      //name: "green",
    },
    {
      id: "3",
      //name: "blue",
      },
      {
        id: "4",
        //name: "purple",
      },
      {
        id: "5",
        //name: "red",
      },
      {
        id: "6",
        //name: "orange",
      },
  ];
  const colors= [
    '#ffed29','#c2f58c','#8cf5f1','#e2aefc','#fc4c58', '#fcb67c',
]

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>

      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            clickHandler(index);
          }}
          style={[styles.circle, { backgroundColor: colors[index % colors.length], }]}
        >
          <Text
            style={index === selectedCC ? styles.selected : styles.notSelected}
          >
            {item.id}
          
          </Text>
        </TouchableOpacity>

       
      ))}

    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  selected: {
    //color: "black",
    width: 40,
    height: 40,
    color: 'red',
   
    borderWidth: 2,
    borderRadius: 20,
  },
  notSelected: {
    color: "black",
    //backgroundColor: "white",
  },
});


{/*<View style={[ styles.circle, {backgroundColor: "skyblue", }]} />
          
          <View style={[styles.circle, { backgroundColor: "red" }]} />*/}


           {/*<TouchableOpacity>
        <View style={[ styles.circle, {backgroundColor: "skyblue",  }]} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[ styles.circle, {backgroundColor: "yellow", }]} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[ styles.circle, {backgroundColor: "red", }]} />
      </TouchableOpacity>*/}