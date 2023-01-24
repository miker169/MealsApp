import {FlatList, ListRenderItemInfo, View} from "react-native";

import { CATEGORIES} from "../data/dummy-data";
import Category from "../models/category";
import {CategoryGridTile} from "../components/CategoryGridTile";

const renderCategoryItem = (item: ListRenderItemInfo<Category>) => {
    return (
        <CategoryGridTile title={item.item.title} color={item.item.color}>
    )
}

export const CategoriesScreen = () => {
    return (
        <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id}>

        </FlatList>
    )
}