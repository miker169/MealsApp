import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  onPress: () => void;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
};
export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  color,
  icon,
}) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
