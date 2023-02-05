import {
  Pressable,
  ViewStyle,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import React, { FC, useCallback } from "react";
import Category from "../models/category";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { PressableStateCallbackType } from "react-native/Libraries/Components/Pressable/Pressable";

interface CategoryGridTitleProps extends React.PropsWithChildren<Category> {
  onPress: (catId: string) => void;
}

export const CategoryGridTile: FC<CategoryGridTitleProps> = ({
  title,
  color,
  id,
  onPress,
}) => {
  const pressableStyles = React.useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.button,
      state.pressed ? styles.buttonPressed : null,
    ],
    []
  );

  const pressCallback = useCallback(() => {
    onPress(id);
  }, [id]);

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={pressableStyles}
        onPress={pressCallback}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
