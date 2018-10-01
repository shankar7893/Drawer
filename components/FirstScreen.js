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
  Right,
  Card,
  CardItem,
  Footer
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";

export default class Deals extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
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
          style={{
            flexDirection: "row",
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
            <Card
              style={{
                flex: 3,
                marginBottom: 0,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowColor: "gray"
              }}
            >
              <CardItem style={{ flex: 1 }}>
                <Body>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                      Get Great Deals
                    </Text>
                    <Text style={{ fontSize: 16 }}>Member Sign Up</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            {/* <Card style={{ flex: 1, backgroundColor: "orange", marginTop: 0 }} onMagicTap >
              <CardItem style={{ flex: 1, backgroundColor: "orange" }}>
                <Body>
                    <View style={{flexDirection:'row'}} >
                  <Text>Get Started</Text>
                  
                  </View>
                </Body>
              </CardItem>
            </Card> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#14446a",
                flex: 1,
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
                marginRight: 2,
                marginBottom: 3,
                marginLeft: 2,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowColor: "gray"
              }}
            >
              <Text style={{ color: "#e99b00", padding: 10 }}>Get Started</Text>
              <Feather name="arrow-right" size={20} color={"#e99b00"} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginRight: 10, marginLeft: 5 }}>
            <Card
              style={{
                flex: 3,
                marginBottom: 0,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowColor: "gray"
              }}
            >
              <CardItem style={{ flex: 1 }}>
                <Body>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                      Get Great
                    </Text>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                      Customers!
                    </Text>
                    <Text style={{ fontSize: 16 }}>Merchent Sign Up</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            {/* <Card style={{ flex: 1, backgroundColor: "orange", marginTop: 0 }} onMagicTap >
              <CardItem style={{ flex: 1, backgroundColor: "orange" }}>
                <Body>
                    <View style={{flexDirection:'row'}} >
                  <Text>Get Started</Text>
                  
                  </View>
                </Body>
              </CardItem>
            </Card> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#14446a",
                flex: 1,
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
                marginRight: 2,
                marginBottom: 3,
                marginLeft: 2,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowColor: "gray"
              }}
            >
              <Text style={{ color: "#e99b00", padding: 10 }}>Get Started</Text>
              <Feather name="arrow-right" size={20} color={"#e99b00"} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text style={{ alignSelf: "center", color: "orange" }}>
              See Deals
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", color: "orange" }}>
              See Deals
            </Text>
          </View>
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Text
            style={{
              color: "#14446a",
              textAlign: "center",
              alignSelf: "center"
            }}
          >
            By Selecting my membership type i agree to the GoldMenu Terms and
            Conditions and Privacy Policy
          </Text>
        </View>
      </View>
    );
  }
}

const addItemStyles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: "#EEEEEE",
    marginTop: 20
  },
  wrappers: {
    padding: 10,
    backgroundColor: "#EEEEEE"
  },
  button: {
    height: 36,
    flex: 1,
    backgroundColor: "#555555",
    borderColor: "#555555",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    height: 50,
    margin: 5,
    width: 160
  },
  formInput: {
    height: 36,
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 8,
    color: "#555555"
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
