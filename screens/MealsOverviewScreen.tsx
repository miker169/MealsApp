import { CATEGORIES, MEALS } from "../data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import React, { useLayoutEffect } from "react";
import Meal from "../models/meal";
import { MealsList } from "../components/MealsList/MealsList";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

export type MealItemProps = Pick<
  Meal,
  "title" | "imageUrl" | "affordability" | "complexity" | "duration" | "id"
>;
export const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route: { params },
  navigation,
}) => {
  const catId = params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle: string | undefined = CATEGORIES.find(
      (cat) => cat.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};
