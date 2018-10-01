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
import CustomHeader from "./CustomHeader";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Home"
  });
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.openDrawer()}
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Body>
            <Text
              style={{
                ...Platform.select({
                  ios: {
                    fontWeight: "bold"
                  }
                })
              }}
            >
              Gold Menu
            </Text>
          </Body>
          <Right>
            <Ionicons name="ios-notifications" size={24} color={"gold"} />
          </Right>
        </Header>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Home Screen</Text>
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
