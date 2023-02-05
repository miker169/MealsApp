import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";
import Meal from "../models/meal";

interface MealDetailProps
  extends Pick<Meal, "duration" | "complexity" | "affordability"> {
  style?: ViewStyle;
  textStyle?: TextStyle;
}
export const MealDetails: React.FC<MealDetailProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
