import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="OnboardingScreen"
					component={OnboardingScreen}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
