import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTask = ({ addTask, emptyInput }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter new task"
        onChangeText={onChangeHandler}
      />
      <View>
        {emptyInput && <Text style={{ color: "red" }}>Please add a task</Text>}
      </View>
      <View style={{ marginTop: 15 }}>
        <Button title="Add Task" onPress={() => addTask(text)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
  },
});

export default AddTask;
