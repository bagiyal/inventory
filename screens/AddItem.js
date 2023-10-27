import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Icons from 'react-native-heroicons/outline';
import { Divider } from 'react-native-paper';
import { scale, verticalScale } from 'react-native-size-matters';

const AddItem = () => {
  const handleBack = () => {
    if (navigations.canGoBack()) {
      navigations.goBack();
    }
  };

  return (
    <ScrollView>
    <View className="flex flex-1">
      <View className="flex flex-row w-full h-16 bg-blue-500">
        <TouchableOpacity className="ml-5 w-10" onPress={handleBack}>
          <Icons.ArrowLeftIcon className="text-white mr-80 pt-16" />
        </TouchableOpacity>
        <Text className="text-white text-lg mt-4"> Shirts </Text>
        <Text className="text-white text-lg mt-4 text-right ml-40"> Update Invoice </Text>
      </View>
      <View>
        <Image source={require('../assets/store.jpg')} className="w-11/12 h-48 ml-5 mt-4"  />
      </View>
      <View className="flex flex-row justify-between w-5/6 ml-8 mt-2">
        <Text className="text-black text-xl font-bold mt-2">40,000</Text>
        <Text className="text-black text-base font-bold">Trc Number {'\n'}PUR216590</Text>
      </View>
      <View className="w-11/12 ml-4">
      <Text className="text-black text-xl font-bold mt-2">Description</Text>
      <Text className="text-black text-base mt-2 opacity-70">hare krishna hare krishna krishna krishna hare hare ram hare ram ram ram hare hare</Text>
      </View>
            <View style={styles.inventoryRow}>
            <Text style={styles.inventorytext}>White</Text>
            <Text style={styles.inventorytext}>Logo</Text>
            <Text style={styles.inventorytext}>Collar</Text>
          </View>
    </View>
    </ScrollView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inventoryRow: {
    // backgroundColor:'orange',
    flexDirection: 'row', // Display elements in a row
    justifyContent: 'space-between', // Space evenly between elements
    alignItems: 'center', // Align items vertically at the center
    padding: 10, // Add padding to the row
    width: scale(140),
    height: verticalScale(45),
    marginTop: verticalScale(30),
    left: scale(0),
  },
  inventorytext: {
    color: 'green',
    fontSize: 12, // Set the font size for small text
    backgroundColor: '#e5fff0',
    padding: 5,
    borderRadius: 5,
  },
});
