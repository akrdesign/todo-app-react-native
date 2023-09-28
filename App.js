import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([
    { task: "HTML I", done: true, id: "1" },
    { task: "CSS", done: true, id: "2" },
    { task: "Responsive design", done: true, id: "3" },
  ]);
  const [emptyInput, setEmptyInput] = useState(false)

  const addTask = (text) => {
    if (!text.trim()) {
      setEmptyInput(true)
    } else {
      setTasks((prevTasks) => {
        return [{ task: text, id: uuidv4() }, ...prevTasks];
      });
      setEmptyInput(false)
    }
  };

  const deleteTask = id => {
    setTasks(prevTask => {
      return prevTask.filter(item => item.id !== id)
    })
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addTask={addTask} emptyInput={emptyInput} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => <Task item={item} deleteTask={deleteTask} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
    backgroundColor: 'green',
    flex: 1
  },
  list: {
    marginTop: 30,
    backgroundColor: 'white',
    flex: 1
  },
});
