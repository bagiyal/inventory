import React, { useState } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from "react-native";
// import { PhoneXMarkIcon } from 'react-native-heroicons/outline';
import * as Icons from 'react-native-heroicons/outline';

function LoginScreen({navigation}){
  const [phone,setPhone] = useState("")

  const handlePress = () =>{
    if(phone){
      const modifiedPhone = "+91" + phone; 
      navigation.navigate("VerifyOtpScreen",{
       phoneNumber: modifiedPhone
      })
    }
    else{
      alert("Please enter a phone number")
    }
  }
  
    return (
      // <KeyboardAvoidingView keyboardVerticalOffset={55} style={{flex:1}} behavior={Platform.OS ==='android' ? 'height' : 'padding'}>
      <View className="flex-1 items-center justify-center bg-[#007CBAFF]">
        <View className="flex-1 items-center justify-center mb-5">
          <Image className="w-40 h-40 mb-9 " source={require("../assets/logo.png")} />
          <Text className="text-white text-2xl mt-5 font-bold">Inventory Management</Text>
         <View className="flex flex-row mt-4 w-64 rounded-md border-b-2 border-white">
          <Icons.PhoneIcon className="text-white py-6 mr-2" size={17}/>
          <TextInput
            maxLength={10}
            //className="w-72 rounded-md border-b-2 border-white"
            placeholder= "Phone number"
            keyboardType="phone-pad"
            style={{color:'white'}}
            onChangeText={(text)=>setPhone(text)}
            placeholderTextColor={"#e5e5e5"}
          />
        </View>

        </View>
        <View className="justify-end pb-5">
          <TouchableOpacity
            onPress={handlePress}
            className="bg-white py-2 px-24 rounded-md items-center ${phone.length !== 10 ? 'opacity-50' : ''}"
            disabled={phone.length !== 10}
          >
            <Text className="text-lg">
              Generate OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default LoginScreen;
