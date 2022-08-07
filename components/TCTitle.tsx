//import { createDrawerNavigator } from "@react-navigation/drawer";
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
//const Drawer = createDrawerNavigator();

export default function TCTitle() {
//  const [date, setDate] = useState(new Date(1598051730000));
//  const [mode, setMode] = useState("date");
//  const [show, setShow] = useState(false);
  const [selectedTT, setSelectedTT] = useState(null);
  const clickHandler = (index: any) => {
    setSelectedTT(index);
  };
  console.log("Selected task title is ", selectedTT);
  const data = [
    {
      id: "1",
      name: "Basic",
    },
    {
      id: "2",
      name: "Urgent",
    },
    {
      id: "3",
      name: "Important",
    },
  ];

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            clickHandler(index);
          }}
          style={styles.containerS}
        >
          <Text
            style={index === selectedTT ? styles.selectedTask : styles.notSelectedTask}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  containerS: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 30,

    justifyContent: "center",
    height: 50,
  },
  selectedTask: {
    color: "white",
    backgroundColor: "black",
    width: 90,
    height: 50,
    paddingTop: 16,
      textAlign: 'center',
      
  },
  notSelectedTask: {
    color: "black",
    backgroundColor: "white",
  },
});
