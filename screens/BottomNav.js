import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library of your choice
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef((props, ref) => {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Icon name="home" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="plus" size={24} color="black" />
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="user" size={24} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 56, // Adjust the height according to your design
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    width:'100%'
  },
  tab: {
    alignItems: 'center',
  },
});

export default BottomSheet;
