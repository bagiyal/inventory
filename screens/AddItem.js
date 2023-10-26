import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Icons from 'react-native-heroicons/outline';

const AddItem = () => {
  const handleBack = () => {
    if (navigations.canGoBack()) {
      navigations.goBack();
    }
  };

  return (
    <View className="flex flex-1">
      <View className="flex flex-row w-full h-16 bg-blue-500">
        <TouchableOpacity className="ml-5" onPress={handleBack}>
          <Icons.ArrowLeftIcon className="text-white mr-80 pt-16" />
        </TouchableOpacity>
        <Text className="text-black right-0"> Shirts </Text>
      </View>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({});
