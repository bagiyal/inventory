import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
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
import {moderateScale, verticalScale} from 'react-native-size-matters';

const BottomSheet = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('home'); // Initialize with 'home' as the active tab

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const getTabColor = tabName => {
    return activeTab === tabName ? '#007CBAFF' : 'black';
  };
  const getTextColor = tabName => {
    return activeTab === tabName ? '#007CBAFF' : 'black';
  };

  return (
    <View className="absolute bottom-0 flex flex-row justify-around items-center bg-white h-14 border-t border-lightgray w-full">
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('home')}>
        <Image
          source={require('../assets/box.png')}
          style={[styles.bottomImg, {tintColor: getTextColor('home')}]}
        />
        <Text style={{color: getTextColor('home')}}>Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('add')}>
        <Image
          source={require('../assets/tracking.png')}
          style={[styles.bottomImg, {tintColor: getTextColor('add')}]}
        />
        <Text style={{color: getTextColor('add')}}>Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('profile')}>
        <Image
          source={require('../assets/user.png')}
          style={[styles.bottomImg, {tintColor: getTextColor('profile')}]}
        />
        <Text style={{color: getTextColor('profile')}}>Account</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: verticalScale(52), // Adjust the height according to your design
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    width: '100%',
  },
  tab: {
    alignItems: 'center',
  },
  bottomImg: {
    width: moderateScale(24),
    height: verticalScale(24),
  },
});

export default BottomSheet;
