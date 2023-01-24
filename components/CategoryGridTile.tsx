import {Pressable, View, Text, StyleSheet} from "react-native";
import React from "react";
import Category from "../models/category";

const CategoryGridTitleProps = React.<Category>;

export const CategoryGridTile: = ({title, color}) => {
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({

})