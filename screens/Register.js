import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Checkbox from "expo-checkbox";
import { StyleSheet, Image, ImageBackground } from "react-native"
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as LocalAuthentication from "expo-local-authentication";
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";



const Register = () => {
  const navigation=useNavigation()
  const [isChecked, setChecked] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  const ValidateRegister = Yup.object().shape({
    password: Yup.string()
      .min(6, "Pssword must me greater that 6 charachters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must be characters, at least one letter, one number and one special character"
      )
      .required("Required"),
    email: Yup.string(). required("Required"),
    firstName:Yup.string().required('Required'),
    lastName:Yup.string().required('Required')
  });

  const authenticate = async () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Fingerprint",
      fallbackLabel: "Enter password",
      cancelLabel: "Cancel",
      requireConfirmation: false,
    });

    auth.then((result) => {
      setIsAuthenticated(result.success);

      if (result.success) {
        navigation.navigate("Home");
      }
    });
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const checked = () => {
    setChecked(false);
  };
  const handleLoginRedirect = ( ) => {
    console.log('sdf')
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      // style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#7696db" }}
    >
      <View
       
       // style={{
        //   backgroundColor: "white",
        //   borderBottomLeftRadius: 100,
        //   borderBottomRightRadius: 100,
        //   height: Dimensions.get("window").height * 0.8,
        // }}
      >
         <View style={styles.Register2}>
      <View style={styles.Group4421}>
        <View style={styles.Group362} 
        // style={{    paddingLeft: "3px"}}
        >
          <Image
            style={styles.IconArrowBackOutlineIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dahqeer3j8p-1%3A40?alt=media&token=76790b07-a32e-4d99-9a37-23d15f8ccd97",
            }}
          />
          <Text style={styles.Register}>Register</Text>
          <Text style={styles.FillUpYourDetailsToR}>
            Fill up your details  to register.
          </Text>
        </View>
        <View
          style={{
            padding: 40,
            paddingTop:80
            
          }}
        >
         

        
          <View style={{ marginTop: 30 , }}>
            <Formik
              initialValues={{ email: "", password: "",firstName:"",lastName:"" }}
              validateOnMount={true}
              validationSchema={ValidateRegister}
              onSubmit={(values) => {
                console.log(values)
              }
              
              }
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                      width:250
                    }}
                  >
                    <Ionicons name="person-circle" size={18} color="black" />
                    <TextInput
                      style={{ marginLeft: 10,border:"none" ,outline:"none"                  ,     width:200
                    }}
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                      placeholder="Enter your firstName"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.firstName && touched.firstName ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.firstName}
                      </Text>
                    ) : null}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                      width:250
                    }}
                  >
                    <Ionicons name="person-circle" size={18} color="black" />
                    <TextInput
                      style={{ marginLeft: 10,border:"none" ,outline:"none"                  ,     width:200
                    }}
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                      placeholder="Enter your lastName"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.lastName && touched.lastName ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.lastName}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                      width:250
                    }}
                  >
                    <Icon name="mail" size={18} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10,border:"none" ,outline:"none"                  ,     width:200
                    }}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Enter Your Mobile Number"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.email && touched.email ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",

                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                      width:"70px"
                    }}
                  >
                    <Icon name="lock" size={22} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10,border:"none" ,outline:"none", width:200 }}
                      placeholder="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>

                

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#597ac2",
                      borderRadius: 10,
                      height: 35,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 15,
                    marginTop:15
                    }}
                    onPress={handleSubmit}
                  >
                    <Text style={{ color: "white" }}>Register</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#597ac2",
                      borderRadius: 10,
                      height: 35,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 15,
                    marginTop:15
                    }}
                    onPress={handleLoginRedirect}
                    >
                    <Text style={{ color: "white" }}>Login  </Text>
                  </TouchableOpacity>


                </View>
              )}
            </Formik>

          

          
          </View>
        </View>
       
        </View>
        </View>

       
      </View>

      {/* <View
        style={{
          alignItems: "center",
          height: Dimensions.get("window").height * 0.2,
        }}
      >
        {isBiometricSupported ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={authenticate}
              style={{
                height: 80,
                width: 80,
                borderRadius: 10,
                backgroundColor: "#5c87e6",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="finger-print-outline" size={40} color="white" />
            </TouchableOpacity>

            <Text style={{ color: "white" }}>Register with touch id</Text>
          </View>
        ) : (
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Welcome Back!</Text>
          </View>
        )}
      </View> */}
    </SafeAreaView>
  );
};

export default Register;


const styles = StyleSheet.create({
   Register2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 360,
    height: 940,
    paddingBottom: 23,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(233,254,254,1)",
  },
  Group4421: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Group362: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: 50,
    paddingRight: 118,
    paddingTop: 47,
    paddingBottom: 98,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(115,128,236,1)",
  },
  IconArrowBackOutlineIcon: {
    // marginBottom:"10px",
    width: 24.64,
    height: 21.56,
  },
  Register: {
    color: "rgba(255,255,255,1)",
    // fontSize: "30px",
    // lineHeight: "100%",
    // fontFamily: "Inter, sans-serif",
    fontWeight: "600",
  },
  FillUpYourDetailsToR: {
    color: "rgba(255,255,255,1)",
    // fontSize: "16px",
    // lineHeight: "100%",
    // fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
})