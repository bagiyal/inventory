import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import * as SolidIcons from 'react-native-heroicons/solid';
import {Divider, Icon, Searchbar} from 'react-native-paper';
import BottomNav from './BottomNav';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './BottomNav';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Buttonx from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

function HomeScreen({navigation}) {
  const [openx, setOpenx] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All Warehouse', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);

  const [isContainer1Active, setIsContainer1Active] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleSearch = text => {
    setSearchText(text);
    onSearch(text);
  };

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
    setIsContainer1Active(!isContainer1Active);

    onPress();
  };

  const inventoryData = [
    {
      name: 'Shirts',
      details: ['White', 'Logo', 'Collar'],
      price: '$40,000',
      date: '28-09-2023',
      status: 'Purchased',
      quantity: 500,
    },
    {
      name: 'pants',
      details: ['White', 'Logo', 'Collar'],
      price: '$40,000',
      date: '28-09-2023',
      status: 'Purchased',
      quantity: 500,
    },
    // Add more data objects as needed
  ];

  return (
    <View className="flex flex-1">
      <View className="w-full h-28 bg-[#007CBAFF]">
        <View className="w-full w-11/12 m-3 justify-between flex-row">
          <View className="flex flex-row">
            <Icons.MapPinIcon className="text-white py-5 -mt-2" />
            <Text className="text-white text-base ml-2">Mangarh</Text>
          </View>
          <View className="flex flex-row">
            <Icons.BellAlertIcon className="text-white mr-2 " />
            <SolidIcons.PlusCircleIcon className="text-white" />
          </View>
        </View>
        <View className="flex flex-row -mt-3 -ml-1">
          <Icons.MagnifyingGlassIcon
            className="text-black py-5 ml-6 mt-1"
            style={{
              backgroundColor: 'transparent',
              position: 'absolute',
              left: 2,
              zIndex: 1,
            }} // Adjust the image dimensions and margins as needed
          />
          <TextInput
            style={{
              // flex: 1,
              width: '80%',
              height: 47,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              marginLeft: 10,
              borderRadius: 6,
              padding: 0,
              marginHorizontal: 5,
            }}
            placeholder="             Search "
            value={searchText}
            onChangeText={handleSearch}
            editable={false}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            className="bg-white h-full w-12 top--2  rounded-xl"
            onPress={handlefilter}>
            <Icons.FunnelIcon className="text-black ml-2 mt-2 mb-2" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-1/4">
        <Text
          style={{}}
          className="text-right text-blue mr-4 text-medium mt-1 text-blue-400 underline underline-offset-1">
          View Stock Summary
        </Text>
        <View className="flex flex-row">
          <View className="w-40 h-full bg-orange-300 m-4 rounded-xl ml-2">
            <Text
              className="text-blue py-2 ml-3 text-xl font-extrabold"
              style={styles.inventoryColor}>
              Stock in Hand{' '}
            </Text>
            <Text
              className="text-white ml-9 pt-2 text-3xl font-extrabold"
              style={{color: '#166762'}}>
              1456{' '}
            </Text>
          </View>
          <View className="w-40 h-full bg-yellow-300 m-4 rounded-xl ml-0">
            <Text
              className="text-blue py-2 ml-3 text-xl font-extrabold"
              style={styles.inventoryColor}>
              Stock in Hand{' '}
            </Text>
            <Text
              className="text-white ml-8 pt-2 text-3xl font-extrabold"
              style={{color: '#166762'}}>
              94,563{' '}
            </Text>
          </View>
        </View>
      </View>
      <View>
        {inventoryData.map((item, index) => (
          <View
            className="h-36 w-11/12 mr-2 ml-2 mb-4 ml-4 bg-white rounded-lg mt-0"
            key={index}>
            <View className="flex flex-row">
              <Image
                source={require('../assets/logo.png')}
                className="w-16 h-16 rounted mt-2 ml-2"
              />
              <Text className="text-lg mt-4 ml-2 text-black text-xl font-medium">
                {item.name}
              </Text>
              <View className="flex flex-row justify-between items-center p-10 w-60 h-6 mt-6 -left-36 ml-12">
                {item.details.map((detail, index) => (
                  <Text
                    className="text-green text-xs bg-[#e5fff0]  p-1 h-6 rounded-md ml-2"
                    key={index}>
                    {detail}
                  </Text>
                ))}
              </View>

              <View
                // style={{
                //   // marginLeft: moderateScale(-85),
                //   right: 170,
                //   backgroundColor: 'orange',
                //   height: verticalScale(30),
                //   width: '25%',
                //   marginTop: verticalScale(10),
                //   borderRadius: 40,
                // }}
                className=" bg-orange-500 h-8 w-20 mt-2 right-48 rounded-2xl">
                <Text className="text-base mt-1 ml-30 text-black text-center font-medium">
                  {item.price}
                </Text>
              </View>
            </View>

            <View className="flex flex-row justify-between">
              <View className="justify-around flex-row mt-0">
                <Text className="text-base  ml-2 text-blue-500">
                  {item.date}
                </Text>
                <Text className="text-base  ml-2 text-orange-500">in</Text>
                <Text className="text-base  ml-2 text-orange-500">
                  {item.status}
                </Text>
              </View>
              <View className="mr-4 -top-8">
                <Text className="text-right text-base text-[#003950]">
                  Quantity
                </Text>
                <Text className="text-center text-4xl font-extrabold text-[#003950]">
                  {item.quantity}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        className="w-full ml-0 mb-0">
        <View className="flex absolute bottom-0 right-0 left-0 h-5/6 bg-[#fff] w-full">
          <View className="flex flex-row justify-between ml-1 mr-1">
            <Text className="text-base mt-2 ml-2 font-medium text-black">
              Transaction Activity
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
              }}>
              <Text className="text-base mt-2 mr-2 font-medium text-red-400">
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <Divider bold={true} className="mt-2" />

          <View className="flex flex-row w-5/6">
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Openning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">
                Purchasing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Transfer</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row w-5/6">
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Lost</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Found</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row w-5/6">
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Damaged</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Returned</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text className="text-black text-base opacity-60">Donation</Text>
            </TouchableOpacity>
          </View>
          <View className="px-4">
            <Text className="text-base text-black font-bold mt-2">Dates</Text>
            <Divider bold={true} className="mt-1 mb-4 text-black" />
            <TouchableOpacity className="flex flex-row w-full h-14 rounded-lg border border-gray-400">
              <Icons.CalendarDaysIcon className="text-white py-5 text-black ml-2 mt-2" />
              <Text className="text-base ml-4 mt-4 text-black">From Date</Text>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row w-full h-14 rounded-lg border border-gray-400 mt-4">
              <Icons.CalendarDaysIcon className="text-white py-5 text-black ml-2 mt-1" />
              <Text className="text-base ml-4 mt-3 text-black">To Date</Text>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </TouchableOpacity>
          </View>
          <View className="m-3">
            <Text className="text-base text-black mt-2 font-bold">
              {' '}
              WareHouse
            </Text>
            <Divider
              bold={true}
              className="mt-1 mb-4 text-black"
              theme={{colors: {primary: 'green'}}}
            />
            <DropDownPicker
              open={openx}
              value={value}
              items={items}
              setOpen={setOpenx}
              setValue={setValue}
              setItems={setItems}
              placeholder={'All Warehouse'}
            />
          </View>
          <TouchableOpacity
            className="w-11/12 h-12 bg-[#007CBAFF] ml-4 mt-2 rounded-xl"
            onPress={() => {
              setIsVisible(false);
            }}>
            <Text className="text-center text-white text-lg mt-2">
              {' '}
              Apply Filter{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <BottomNav />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
});
