import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import config from "../config/config.json";

function StockList() {
	const [products, setProducts] = useState<any[]>([]);

	useEffect(() => {
		fetch(`${config.base_url}/products?api_key=${config.api_key}`)
			.then((response) => response.json())
			.then((result) => setProducts(result.data));
	}, []);

	const list = products.map((product, index) => (
		<Text key={index}>
			{product.name} - ({product.stock} St) {product.price} Kr Styck
		</Text>
	));

	return <View>{list}</View>;
}

export default function Stock() {
	return (
		<View>
			<Text
				style={{
					color: "#333",
					fontSize: 25,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Lagerförteckning
			</Text>
			<StockList />
		</View>
	);
}
