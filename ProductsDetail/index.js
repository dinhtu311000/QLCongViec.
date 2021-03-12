import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../header/Header";
import Products from "../servicer/Product";

function ProductsDetail({ navigation, route }) {
  const { idProduct } = route.params;
  const product = Products.filter((item) => item.id === idProduct)[0];

  return (
    <View style={styles.container}>
      <Header
        onBack={() => navigation.goBack()}
        title="Product Detail"
      ></Header>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.header}>Name:</Text>
          <Text style={styles.info}>{product.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Detail:</Text>
          <Text style={styles.info}>{product.details}</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductsDetail;
