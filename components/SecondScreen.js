import React from "react";
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
  Platform,
  ToastAndroid
} from "react-native";
import { createBottomTabNavigator, DrawerActions } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";

class SecondScreen extends React.Component {
  render() {
    return (
      <Container>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <Image
              style={{
                width: Dimensions.get("window").width * 0.5,
                height: Dimensions.get("window").width * 0.15
              }}
              source={{ uri: "http://159.65.152.153/goldmenu/logobig.png" }}
            />
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>──────── Log In With ────────</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,

                alignItems: "flex-end",
                marginRight: 10
              }}
            >
              <Entypo name="google--with-circle" size={30} color={"red"} />
            </View>
            <View
              style={{
                flex: 1,

                alignItems: "flex-start"
              }}
            >
              <Entypo name="facebook-with-circle" size={30} color={"blue"} />
            </View>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>or</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TextInput
              style={{
                width: Dimensions.get("window").width * 0.8,
                height: Dimensions.get("window").height * 0.08,
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "gray"
              }}
              placeholder="Enter Your Pin"
            />
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              style={{
                marginTop: Dimensions.get("window").height * 0.1,
                backgroundColor: "#e99b00",
                elevation: 2,
                alignItems: "center",
                justifyContent: "center",
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.6,
                shadowColor: "gray",
                width: Dimensions.get("window").width * 0.7,
                height: Dimensions.get("window").height * 0.06,
                borderRadius: 10,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
              }}
            >
              <Text style={{ color: "white" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <Text style={{ color: "#e99b00" }}>Forgot your Pin?</Text>
          </View>
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Create a new account</Text>
          </View>
        </View>
      </Container>
    );
  }
}

export default SecondScreen;
