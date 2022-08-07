import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import TCColor from "./TCColor";
import TCTitle from "./TCTitle";
//const [UselectedTT, getSelectedTT] = useState("");
//export interface DataBox {
//  Title: "task",
//  Task: {async (params:type) => {data},
//  Date: Date;
//  Color: ,
//
//};

function HomeScreen({ navigation }: any) {
  const [selectedCC, setSelectedCC] = useState("");
  const [taskTitleInput, setTaskTitleInput] = useState("");
  const [selectedTT, setSelectedTT] = useState("");

  const [date, setDate] = useState(new Date());


  useEffect(() => {
    getValue();
  }, []);

  const getValue = () => {
    try {
      AsyncStorage.getItem("BgColor").then((color) => {
        if (color != null) {
          setSelectedCC(color);
        }
      });
    } catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.setItem(
        "DateTime",
        date.toDateString() //|| date.toTimeString()
      );
    } catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.getItem("TaskName").then((value) => {
        if (value != null) {
          setTaskTitleInput(value);
        } 
      });
    } catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.getItem("TaskTT").then((value) => {
        if (value != null) {
          setSelectedTT(value);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: 10 }}>
        <Text style={{ paddingTop: 20, paddingLeft: 20 }}>Welcome Back</Text>
        <Text style={styles.homeText}> Here's Update Today. </Text>
      </View>

      <ScrollView >
        <View style={{ flex: 1, backgroundColor: 'lightblue', margin: 20, padding: 20, borderRadius: 15, }}>
          <Text > Color : {selectedCC}</Text>
          <Text style={{paddingBottom: 10, paddingTop: 10,}}> Condition : {selectedTT}</Text>
          <Text> Task Title : {taskTitleInput}</Text>
          
       
          <View style={{flexDirection: 'row', paddingTop: 10,}}>
          <Image
              style={{ width: 15, height: 15, marginLeft: 5, }}
              source={require("../assets/calender.png")}
            />
               {/*<Text> Date text : {date}</Text>*/}
          </View>
        </View>
      </ScrollView>

      <View style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.BtnTask}
          onPress={() => navigation.navigate("Task")}
        >
          <Text style={{ color: "#fff" }}>
            <Text style={{ backgroundColor: "#fff", color: "#000" }}> + </Text>
            <Text> </Text>
            Add to Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TaskScreen({ navigation }: any) {

  //const [UselectedTT, getSelectedTT] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedCC, setSelectedCC] = useState(null);
  const [taskTitleInput, settaskTitleInput] = useState("");

  const [selectedTT, setSelectedTT] = useState(null);
  
  
  const saveTask = async () => {
    try {
      await AsyncStorage.setItem("BgColor", selectedCC);
    } catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem(
        "DateTime",
        date.toDateString() //|| date.toTimeString()
      );
    } catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem("TaskName", taskTitleInput);
    } catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem("TaskTT", selectedTT);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.6, margin: 20 }}>
        <Text style={{ marginBottom: 10 }}>Text Color</Text>
        <TCColor />

        <View style={styles.linne}>
          <Text style={{ paddingTop: 10 }}>Task Deadline </Text>
          <View style={{ flex: 0, flexDirection: "row", marginTop: 15 }}>
            <View style={{ flex: 1, marginRight: 55 }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="datetime"
                is24Hour={true}
                onChange={(date) => {
                  console.log(date);
                }}
              />
            </View>
            <Image
              style={{ width: 25, height: 25, marginRight: 15 }}
              source={require("../assets/calender.png")}
            />
          </View>
        </View>

        <View style={styles.linne}>
          <Text style={{ paddingTop: 15, paddingBottom: 10 }}>Task Title </Text>
          <TextInput
            style={styles.text}
            value={taskTitleInput}
            onChangeText={(data) => settaskTitleInput(data)}
          ></TextInput>
        </View>

        <View style={styles.linne}>
          <Text style={{ paddingTop: 15 }}>Task Title</Text>
        </View>

        <View style={{flex:1 , flexDirection: "row" }}>
        <TCTitle/>
        </View>
      </View>


      <View
        style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          //onPress={() => navigation.navigate("Home")}
          onPress={saveTask}
          style={styles.BtnSave}
        >
          <Text style={{ color: "#fff" }}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Task Manager",
            headerStyle: {
              backgroundColor: "#c0d9b2",
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={({ navigation }: any) => ({
            title: "Edit Task",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "black",

            headerRight: () => (
              <View style={{ flex: 0.1 }}>
                <TouchableOpacity>
                  <Image
                    style={{ width: 25, height: 25, marginRight: 15 }}
                    source={require("../assets/trashcan.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  BtnTask: {
    backgroundColor: "#000",
    width: 150,
    height: 50,
    borderRadius: 40,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnSave: {
    backgroundColor: "#000",
    width: 300,
    height: 50,
    borderRadius: 40,
    marginBottom: -60,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    height: 50,
    fontSize: 25,
  },
  linne: {
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

//const TCTask = () => {
//  const {TCTask} = props
//  switch (TCTask) {
//    case 'basic':
//      component =
//  }
//};
//const [selected, setSelected] = useState(false);
//const clickHandler = () => {
//  setSelected(!selected);
//};
//const setSelectedSize = (size: string) => {
//  if (size !== selected) setSelected(size);
//  else setSelected(""); // Optional reset if click on active button
//};
    //AsyncStorage.getItem("TEXTINPUT").then((UselectedTT) => {
    //  return getSelectedTT(UselectedTT);
    //});
    //AsyncStorage.getItem("DATE").then((Udate) => {
    //  return getDate(Udate);
    //});