import { FlatList, ListRenderItem } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { CategoryGridTile } from "../components/CategoryGridTile";
import React, { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawParamsProps, RootStackParamList } from "../App";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";

type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawParamsProps, "Categories">,
  NativeStackScreenProps<RootStackParamList>
>;

export const CategoryScreen: React.FC<CategoriesScreenProps> = ({
  navigation,
}) => {
  function pressHandler(catId: string) {
    navigation.navigate("MealsOverview", { categoryId: catId });
  }
  const categoryPressHandler = useCallback((catId: string) => {
    pressHandler(catId);
  }, []);
  const renderCategoryItem: ListRenderItem<Category> = useCallback(
    ({ item }) => {
      return (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          id={item.id}
          onPress={categoryPressHandler}
        />
      );
    },
    []
  );

  const keyExtractor = useCallback((item: Category) => item.id, []);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
  );
};
