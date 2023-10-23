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
import {Divider, Searchbar} from 'react-native-paper';
import BottomNav from './BottomNav';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './BottomNav';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Buttonx from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

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
              flex: 1, // Use flex: 1 to allow the TextInput to expand and fill available space
              height: 47,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              marginLeft: 10,
              borderRadius: 6,
              padding: 0,
            }}
            placeholder="     🔍   Search   "
            value={searchText}
            onChangeText={handleSearch}
            editable={false}
          />
          <TouchableOpacity style={styles.filterIcon} onPress={handlefilter}>
            <Icons.FunnelIcon className="text-black ml-2 mt-2 mb-2" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stockSummary}>
        <Text style={{}} className="text-right text-blue mr-4 text-medium mt-1 text-blue-400 underline underline-offset-1">
          View Stock Summary
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.stockCard}>
            <Text className="text-blue py-2 ml-7 text-base font-extrabold" style={styles.inventoryColor} >
              Stock in Hand{' '}
            </Text>
            <Text
              className="text-white ml-10 text-3xl font-extrabold"
              style={{color: '#166762'}}>
              1456{' '}
            </Text>
          </View>
          <View style={[styles.stockCard, {backgroundColor: '#f9ff80'}]}>
            <Text className="text-blue py-2 ml-7 text-base font-extrabold" style={styles.inventoryColor}>
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
            className="w-20 h-20 rounted mt-2 ml-2 "
          />
          <Text className="text-lg mt-6 ml-2 text-black text-xl font-medium">
            Shirts
          </Text>
          <View style={styles.inventoryRow}>
            <Text style={styles.inventorytext}>White</Text>
            <Text style={styles.inventorytext}>Logo</Text>
            <Text style={styles.inventorytext}>Collar</Text>
          </View>

          <View
            style={{
              marginLeft: moderateScale(-70),
              backgroundColor: 'orange',
              height: '40%',
              width: '28%',
              marginTop: 10,
              borderRadius: 40,
            }}>
            <Text className="text-base mt-1 ml-30 text-black text-center font-medium">
              $40,000
            </Text>
          </View>
        </View>
        
        <View style={styles.subInventoryBottom}>
          {/* <Image source={require('../assets/logo.png')} className="w-20 h-20 rounted ml-2 mt-2 " /> */}
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: verticalScale(12),
            }}>
            <Text className="text-base  ml-2 text-blue-500">28-09-2023</Text>
            <Text className="text-base  ml-2 text-orange-500">in</Text>
            <Text className="text-base  ml-2 text-orange-500">Purchased</Text>
          </View>
          <View className="mr-4" style={{top: verticalScale(-10)}}>
            <Text
              className="text-right text-small"
              style={styles.inventoryColor}>
              Quantity
            </Text>
            <Text
              className="text-center text-2xl text-amber-500 font-bold"
              style={styles.inventoryColor}>
              500
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inventory}>
        <View style={styles.subInventory}>
          <Image
            source={require('../assets/logo.png')}
            className="w-20 h-20 rounted mt-2 ml-2 "
          />
          <Text className="text-lg mt-6 ml-2 text-black text-xl font-medium">
            Shirts
          </Text>
          <View style={styles.inventoryRow}>
            <Text style={styles.inventorytext}>White</Text>
            <Text style={styles.inventorytext}>Logo</Text>
            <Text style={styles.inventorytext}>Collar</Text>
          </View>

          <View
            style={{
              marginLeft: moderateScale(-70),
              backgroundColor: 'orange',
              height: '40%',
              width: '28%',
              marginTop: 10,
              borderRadius: 40,
            }}>
            <Text className="text-base mt-1 ml-30 text-black text-center font-medium">
              $40,000
            </Text>
          </View>
        </View>
        
        <View style={styles.subInventoryBottom}>
          {/* <Image source={require('../assets/logo.png')} className="w-20 h-20 rounted ml-2 mt-2 " /> */}
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: verticalScale(12),
            }}>
            <Text className="text-base  ml-2 text-blue-500">28-09-2023</Text>
            <Text className="text-base  ml-2 text-orange-500">in</Text>
            <Text className="text-base  ml-2 text-orange-500">Purchased</Text>
          </View>
          <View className="mr-4" style={{top: verticalScale(-10)}}>
            <Text
              className="text-right text-small"
              style={styles.inventoryColor}>
              Quantity
            </Text>
            <Text
              className="text-center text-2xl text-amber-500 font-bold"
              style={styles.inventoryColor}>
              500
            </Text>
          </View>
        </View>
      </View>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        style={{width: '100%', marginLeft: 0, marginBottom: 0}}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: verticalScale(540),
            backgroundColor: '#fff',
            width: '100%',
          }}>
          <View style={styles.filter_transaction_activity}>
            <Text className="text-lg mt-2 ml-2 font-medium text-black">
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
          <Divider
            bold={true}
            className="mt-2"
            theme={{colors: {primary: 'green'}}}
          />

          <View style={{flexDirection: 'row', width: '90%'}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Openning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Purchasing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Transfer</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Lost</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Found</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Damaged</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Returned</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.buttonText}>Donation</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-base text-black ml-4 mt-2">Dates</Text>
            <Divider
              bold={true}
              className="mt-2"
              theme={{colors: {primary: 'green'}}}
            />
            <TouchableOpacity style={styles.datePicker}>
              <Icons.CalendarDaysIcon className="text-white py-5 text-black ml-2 mt-1" />
              <Text className="text-base ml-4 mt-3 text-black">From Date</Text>
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

            <TouchableOpacity style={styles.datePicker}>
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
          <View style={styles.warehouse}>
            <Text className="text-base text-black mt-2"> WareHouse</Text>
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
          <View style={styles.applyFilter}>
            <Button
              title="Apply Filter"
              color="#007CBAFF"
              onPress={() => {
                setIsVisible(false);
              }}
              // accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </Modal>
      <BottomNav />
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
    backgroundColor: '#007CBAFF',
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
    height: verticalScale(130),
    width: '90%',
    margin: 10,
    marginLeft: 18,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  inventoryRow: {
    // backgroundColor:'orange',
    flexDirection: 'row', // Display elements in a row
    justifyContent: 'space-between', // Space evenly between elements
    alignItems: 'center', // Align items vertically at the center
    padding: 10, // Add padding to the row
    width:scale(140),
    height:verticalScale(45),
    marginTop:verticalScale(38),
    left:scale(-65),
  },
  inventorytext: {
    color: 'green',
    fontSize: 12, // Set the font size for small text
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  inventoryColor: {
    color: '#003950',
  },
  subInventory: {
    flexDirection: 'row',
  },
  subInventoryBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter_transaction_activity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'orange',
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
  },
  buttonContainer: {
    backgroundColor: '#f3f4f6', // Background color of the button
    borderRadius: 8, // Border radius to make it rounded
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    width: scale(90),
    height: scale(30),
    margin: moderateScale(8),
    marginLeft: moderateScale(15),
  },
  buttonText: {
    color: 'black', // Text color
    fontSize: 18, // Font size
  },
  datePicker: {
    flexDirection: 'row',
    width: '90%',
    height: scale(47),
    // backgroundColor:'yellow', // Background color of the date
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  warehouse: {
    height: verticalScale(80),
    // backgroundColor:'black',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: verticalScale(10),
  },
  applyFilter: {
    marginTop: verticalScale(30),
    width: '90%',
    marginLeft: scale(18),
  },
});
