import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import {StyleSheet, SafeAreaView, Text, View} from "react-native";
import {Animated, Easing} from "react-native";

import LottieView from "lottie-react-native";

const OnboardingScreen = ({navigation}) => {
	const handleDone = () => {
		navigation.navigate("Home");
	};

	return (
		<View className="flex-1">
			<Onboarding
				onDone={handleDone}
				onSkip={handleDone}
				subTitleStyles={{color: "green"}}
				pages={[
					{
						backgroundColor: "#fff",
						image: (
							<View className="">
								<LottieView
									className="w-32 h-32"
									source={require("../../assets/animation/1.json")}
									autoPlay
									loop
								/>
							</View>
						),
						title: "Navigating Your New Role",
						subtitle: "Unlocking the Key Responsibilities and Expectations",
					},
					{
						backgroundColor: "#fff",
						image: (
							<View className="flex">
								<LottieView
									className="w-96 h-96"
									source={require("../../assets/animation/3.json")}
									autoPlay
									loop
								/>
							</View>
						),
						title: "Embracing Our Values",
						subtitle:
							"Building Connections and Thriving in a Supportive Environment",
					},
					{
						backgroundColor: "#fff",
						image: (
							<View className="flex">
								<LottieView
									className="w-96 h-96"
									source={require("../../assets/animation/2.json")}
									autoPlay
									loop
								/>
							</View>
						),
						title: "Empowering Your Success",
						subtitle: "Harnessing the Power of Technology for Maximum Impact",
					},
				]}
			/>
		</View>
	);
};

export default OnboardingScreen;
