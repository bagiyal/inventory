import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import * as SolidIcons from 'react-native-heroicons/solid';
import {Searchbar} from 'react-native-paper';
import BottomNav from './BottomNav';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './BottomNav';

function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = text => {
    setSearchText(text);
    onSearch(text);
  };

  // bottom sheet navigation
  // bottom sheet navigation
  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  const handlefilter = () => {
    setIsVisible(true);
    console.log('filter');
    onPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <View style={styles.subHeaderLeft}>
            <Icons.MapPinIcon className="text-white py-5" />
            <Text className="text-white text-base mt-2 ml-2">Mangarh</Text>
          </View>
          <View style={styles.subHeaderRight}>
            <Icons.BellAlertIcon className="text-white mr-2 " />
            <SolidIcons.PlusCircleIcon className="text-white" />
          </View>
        </View>
        <View style={styles.subHeader2}>
          <TextInput
            style={{
              height: 47,
              borderColor: 'gray',
              borderWidth: 1,
              width: '80%',
              backgroundColor: 'white',
              marginLeft: 10,
              borderRadius: 6,
            }}
            placeholder="    Search   "
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.filterIcon} onPress={handlefilter}>
            <Icons.FunnelIcon className="text-black ml-2 mt-2 mb-2" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stockSummary}>
        <Text style={{}} className="text-right text-blue mr-4 text-base mt-1">
          View Stock Summary
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.stockCard}>
            <Text className="text-blue py-2 ml-7 text-base font-extrabold">
              Stock in Hand{' '}
            </Text>
            <Text
              className="text-white ml-10 text-3xl font-extrabold"
              style={{color: '#166762'}}>
              1456{' '}
            </Text>
          </View>
          <View style={[styles.stockCard, {backgroundColor: '#f9ff80'}]}>
            <Text className="text-blue py-2 ml-7 text-base font-extrabold">
              Stock in Hand{' '}
            </Text>
            <Text
              className="text-white ml-10 text-3xl font-extrabold"
              style={{color: '#166762'}}>
              1456{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inventory}>
        <View style={styles.subInventory}>
          <Image
            source={require('../assets/logo.png')}
            className="w-20 h-20 rounted mt-2 "
          />
          <Text className="text-lg mt-6 ml-2 text-black text-xl font-medium">
            Shirts
          </Text>
          <View
            style={{
              marginLeft: 100,
              backgroundColor: 'orange',
              height: '50%',
              width: '24%',
              marginTop: 10,
              borderRadius: 40,
            }}>
            <Text className="text-base mt-2 ml-25 text-black text-center font-medium">
              $40,000
            </Text>
          </View>
        </View>
        <View style={styles.subInventoryBottom}>
          {/* <Image source={require('../assets/logo.png')} className="w-20 h-20 rounted ml-2 mt-2 " /> */}
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text className="text-base  ml-2 text-blue-500">28-09-2023</Text>
            <Text className="text-base  ml-2 text-orange-500">in</Text>
            <Text className="text-base  ml-2 text-orange-500">Purchased</Text>
          </View>
          <View className="mr-4 " style={{top: -20}}>
            <Text className="text-right text-small">Quantity</Text>
            <Text className="text-center text-lg text-amber-500 font-bold">
              500
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inventory}>
        <View style={styles.subInventory}>
          <Image
            source={require('../assets/logo.png')}
            className="w-20 h-20 rounted mt-2 "
          />
          <Text className="text-lg mt-6 ml-2 text-black text-xl font-medium">
            Shirts
          </Text>
          <View
            style={{
              marginLeft: 100,
              backgroundColor: 'orange',
              height: '50%',
              width: '24%',
              marginTop: 10,
              borderRadius: 40,
            }}>
            <Text className="text-base mt-2 ml-25 text-black text-center font-medium">
              $40,000
            </Text>
          </View>
        </View>
        <View style={styles.subInventoryBottom}>
          {/* <Image source={require('../assets/logo.png')} className="w-20 h-20 rounted ml-2 mt-2 " /> */}
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text className="text-base  ml-2 text-blue-500">28-09-2023</Text>
            <Text className="text-base  ml-2 text-orange-500">in</Text>
            <Text className="text-base  ml-2 text-orange-500">Purchased</Text>
          </View>
          <View className="mr-4 " style={{top: -20}}>
            <Text className="text-right text-small">Quantity</Text>
            <Text className="text-center text-lg text-amber-500 font-bold">
              500
            </Text>
          </View>
        </View>
      </View>

      {/* <BottomNav /> */}
      
        <GestureHandlerRootView style={styles.container1}>
          <View style={styles.container1}>
            {/* <StatusBar style="dark" /> */}
            {/* <TouchableOpacity style={styles.button} onPress={onPress} /> */}
            <BottomSheet ref={ref}>
            <View style={{ flex: 1, backgroundColor: 'orange' }} />
            </BottomSheet>
          </View>
        </GestureHandlerRootView>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '16%',
    width: '100%',
    backgroundColor: '#0097ff',
  },
  subHeader: {
    height: '40%',
    width: '95%',
    margin: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'white',
  },
  subHeaderLeft: {
    flexDirection: 'row',
  },
  subHeaderRight: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  subHeader2: {
    marginTop: -18,
    flexDirection: 'row',
  },
  search: {
    width: '80%',
    marginLeft: '2%',
    backgroundColor: 'white',
  },
  filterIcon: {
    backgroundColor: 'white',
    height: '75%',
    width: '12%',
    top: -2,
    margin: 5,
    borderRadius: 10,
  },
  stockSummary: {
    height: '24%',
  },
  stockCard: {
    width: '42%',
    height: '120%',
    backgroundColor: 'orange',
    margin: 12,
    borderRadius: 12,
  },
  inventory: {
    height: '17%',
    width: '90%',
    margin: 10,
    marginLeft: 18,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  subInventory: {
    flexDirection: 'row',
  },
  subInventoryBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    // top: 0,
    bottom: 0,
    width: '100%',
    height: '70%',
    backgroundColor:'orange',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'orange',
    opacity: 0.6,
  },
});
