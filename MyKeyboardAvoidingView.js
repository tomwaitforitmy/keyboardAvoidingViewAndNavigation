import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Platform } from "react-native";

const MyKeyboardAvoidingView = ({ children }) => {
  //as suggested in many places online adjust the vertical offset with the header height.
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      //if you add 64 here, it works quite nice for iOS, but after you close the keyboard,
      //the view is messed up by 64(?) pixels
      keyboardVerticalOffset={headerHeight}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
  },
});

export default MyKeyboardAvoidingView;
