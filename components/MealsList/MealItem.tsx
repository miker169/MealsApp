import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { useCallback } from "react";
import { MealItemProps } from "../../screens/MealsOverviewScreen";
import { PressableStateCallbackType } from "react-native/Libraries/Components/Pressable/Pressable";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { MealDetails } from "../MealDetails";

interface MealItemNavigationProps
  extends NativeStackNavigationProp<RootStackParamList, "MealDetail"> {}

export const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation<MealItemNavigationProps>();

  const pressableStyles = React.useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> => [
      state.pressed ? styles.buttonPressed : null,
    ],
    []
  );

  const selectMealItemHandler = useCallback(() => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }, [id, navigation]);

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={pressableStyles}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },

  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
});
