import React from "react";
import { View, Button, FlatList, TextInput } from "react-native";
import MyKeyboardAvoidingView from "./MyKeyboardAvoidingView";

const fillDummyElements = (itemData) => {
  return <Button title={itemData.item.id.toString()}></Button>;
};

const fillDummyData = () => {
  let array = [];
  for (i = 0; i < 30; i++) {
    let object = { id: i };
    array[i] = object;
  }

  return array;
};

function DevScreen({ navigation }) {
  const dummyElements = fillDummyData();

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <MyKeyboardAvoidingView>
        <FlatList data={dummyElements} renderItem={fillDummyElements} />
        <View style={{ flex: 1, minHeight: 40 }}>
          <TextInput
            style={{
              backgroundColor: "#2E2E2E",
              width: "100%",
              borderRadius: 18,
              height: 36,
              paddingLeft: 10,
              paddingRight: 10,
              color: "#FFFFFF",
            }}
          />
        </View>
      </MyKeyboardAvoidingView>
    </View>
  );
}

export default DevScreen;
