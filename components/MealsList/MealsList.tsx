import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";
import { MealItem } from "./MealItem";
import { MealItemProps } from "../../screens/MealsOverviewScreen";
import { MEALS } from "../../data/dummy-data";

type MealsListProps = {
  items: Array<Meal>;
};
export const MealsList: React.FC<MealsListProps> = ({ items }) => {
  const getItem = useCallback((item: Meal) => {
    return item.id;
  }, []);
  const renderMealItem = useCallback((itemData: ListRenderItemInfo<Meal>) => {
    const item: MealItemProps = itemData.item;
    return <MealItem {...item} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={getItem}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
