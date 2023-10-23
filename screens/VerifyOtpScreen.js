import React, { useState, useRef, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Alert
} from "react-native";
import auth from '@react-native-firebase/auth';
import {
  getHash,
  startOtpListener,
  useOtpVerify,
} from 'react-native-otp-verify';

function VerifyOtpScreen({ route, navigation }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);
  console.log(" route params",route.params,typeof(route.params));
  const { phoneNumber } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [verificationId, setVerificationId] = useState(null); // Added state for verification ID
  const { hash, xotp, message, timeoutError, stopListener, startListener } = useOtpVerify({numberOfDigits: 6});

  // using methods
  useEffect(() => {
    getHash().then(hash => {
      console.log(" hash ",hash);
      // use this hash in the message.
    }).catch(console.log);
  
    startOtpListener(message => {
      console.log("messsgat ---",message);
      // extract the otp using regex e.g. the below regex extracts 6 digit otp from message
      if (message) {
      // const otp = /(\d{6})/g.exec(message)[1];
      // console.log("opt ---",otp);
      // setOtp(otp); 
      }
    });
    return () => removeListener();
  }, []);

 
  useEffect(() => {
    // Send OTP to the provided phone number
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmation => {
        setVerificationId(confirmation.verificationId);
      })
      .catch(error => {
        console.error('Error sending OTP:', error);
      });
  }, [phoneNumber]);
 
  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      setShowResendButton(true);
    }
    return () => clearInterval(timer);
  }, [seconds]);
 
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1);
      setOtp(newOtp);
 
      if (value && index < refs.current.length - 1) {
        refs.current[index + 1].focus();
      }
    }
  };


  const handleResendOTP = async () => {
    try {
      setIsLoading(true);
      await auth()
        .signInWithPhoneNumber(phoneNumber)
        .then(confirmation => {
          setVerificationId(confirmation.verificationId);
          setSeconds(30); // Reset the timer
          setShowResendButton(false); // Hide the resend button
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          console.log('Error resending OTP:', error);
          Alert.alert('Error', 'Failed to resend OTP. Please try again.');
        });
    } catch (error) {
      setIsLoading(false);
      console.log('Error resending OTP:', error);
      Alert.alert('Error', 'Failed to resend OTP. Please try again.');
    }
  };

  const handleVerifyCode = async () => {
    try {
      setIsLoading(true);
      const enteredOtp = otp.join('');
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        enteredOtp
      );
      await auth().signInWithCredential(credential);
      setIsLoading(false);
      // OTP verification successful
      navigation.navigate('HomeScreen'); // Navigate to HomeScreen
    } catch (error) {
      setIsLoading(false);
      console.log('Error verifying OTP:', error);
      // Display an error message to the user
      Alert.alert('Error', 'Failed to verify OTP. Please try again.');
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-[#007CBAFF]">
      <View className="flex-1 items-center justify-center">
        <Image
          className="w-36 h-36 mt-2"
          source={require("../assets/logo.png")}
        />
        <Text className="text-white text-lg mt-2 font-bold">
          Verify Your Phone Number
        </Text>
        <Text className="text-white mt-2 text-xs text-center">
          Please enter the verification code we sent to complete the verification process.
        </Text>
        <Text className="text-white text-l mt-3">
          {showResendButton ? (
            <TouchableOpacity
            onPress={handleResendOTP}
              disabled={isLoading}
            >
              <Text className="text-white text-sm text-l">Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            `Resend in ${seconds} seconds`
          )}
        </Text>
        <View className="flex flex-row mt-1">
          {Array.from({ length: 6 }, (_, index) => (
            <TextInput
              autoComplete="one-time-code"
              key={index}
              className="w-9 h-9 m-2 text-l text-center text-black bg-white border-b-1 border-white"
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleOtpChange(index, value)}
              value={otp[index]}
              ref={(inputRef) => (refs.current[index] = inputRef)}
            />
          ))}
        </View>
       
      </View>
      <View className="justify-end pb-2">
        <TouchableOpacity
          onPress={handleVerifyCode}
          className="bg-white py-2 px-20 rounded-md items-center"
          disabled={isLoading}
        >
          <Text className="text-lg">Login</Text>
        </TouchableOpacity>
      </View>    
    </View>
  );
}

export default VerifyOtpScreen;
