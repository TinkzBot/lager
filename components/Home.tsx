import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FrontImage from "./../assets/frontimage.jpg";
import Stock from "./../components/Stock";
import { Base, Typography } from "../styles";
// 4981f8a0a5e999e31be26ed3a8019945 APInyckel
export default function Home({ products, setProducts }) {
	return (
		<SafeAreaView style={Base.container}>
			<ScrollView style={Base.base}>
				<Text style={{ ...Base.header1, ...Typography.header1 }}>
					Hemma Fix
				</Text>
				<Image source={FrontImage} style={Base.headerImage} />
				<Stock products={products} setProducts={setProducts} />
				<StatusBar style="auto" />
			</ScrollView>
		</SafeAreaView>
	);
}
