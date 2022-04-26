import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import Pick from "./components/Pick";
import Deliveries from "./components/Deliveries";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Base } from "./styles";
import { useState } from "react";

const Tab = createBottomTabNavigator();
const routeIcons = {
	Lager: "home",
	Plock: "list",
	"Ny inleverans": "car",
};

export default function App() {
	const [products, setProducts] = useState([]);
	const [allDeliveries, setAllDeliveries] = useState([]);
	return (
		<SafeAreaView style={Base.container}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName = routeIcons[route.name] || "alert";

							return (
								<Ionicons
									name={iconName}
									size={size}
									color={color}
								/>
							);
						},
						tabBarActiveTintColor: "tomato",
						tabBarInactiveTintColor: "gray",
						headerShown: false,
					})}
				>
					<Tab.Screen name="Lager">
						{() => (
							<Home
								products={products}
								setProducts={setProducts}
							/>
						)}
					</Tab.Screen>
					<Tab.Screen name="Plock">
						{() => (
							<Pick
								products={products}
								setProducts={setProducts}
							/>
						)}
					</Tab.Screen>
					<Tab.Screen name="Ny inleverans" component={Deliveries} />
				</Tab.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
