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
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerActions
} from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Button,
  Icon,
  Body,
  Left,
  Footer
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather,
  EvilIcons
} from "@expo/vector-icons";

import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";
import firstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import SideMenu from "./components/SideMenu";

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
// const CustomDrawerContentComponent = props => (
//   <Container>
//     <Content>
//       <DrawerItems {...props} />
//     </Content>
//   </Container>
// );
const CustomDrawerContentComponent = props => (
  <Container>
    <Header
      style={{
        height: Dimensions.get("window").height * 0.15,
        backgroundColor: "white",
        borderBottomColor: "white",
        justifyContent: "flex-start"
      }}
    >
      <Left>
        <EvilIcons
          name="close"
          size={24}
          onPress={() => props.navigation.closeDrawer()}
          paddingLeft={20}
        />
      </Left>
    </Header>
    <Content
      contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
    >
      <DrawerItems {...props} />
    </Content>
    <Footer
      style={{ backgroundColor: "white", borderTopColor: "white", margin: 20 }}
    >
      <Left>
        <View>
          <Thumbnail source={require("./assets/sciens.jpg")} />
          <Text style={{ fontSize: 20 }}>John Doe</Text>
          <Text style={{}}>Long Beach CA</Text>
        </View>
      </Left>
    </Footer>
  </Container>
);

const MyApp = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    FirstScreen: {
      screen: firstScreen
    },
    SecondScreen: {
      screen: SecondScreen
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: SideMenu,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);
