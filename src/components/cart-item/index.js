import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../constants/themes/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.head}>{item.name}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailQty}>Cantidad: {item.quantity}</Text>
          <Text style={styles.detailPrice}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <IonicIcons name="trash" size={20} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
