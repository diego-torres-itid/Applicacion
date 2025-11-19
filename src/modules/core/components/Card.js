import "@/global.css";
import { Color, FontFamily, Gap, Height, Padding } from "@/src/assets/styles/GlobalStyles";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Card(){
		  
		  return (
				<SafeAreaView style={styles.container}>
					  <View style={styles.view}>
							<View style={styles.card}>
								  <View style={[styles.superior, styles.buttonFlexBox1]}>
										<View style={[styles.heading3, styles.heading3Position]}>
											  <Text style={styles.baseDeDatos} >Base de Datos</Text>
										</View>
								  </View>
								  <View style={styles.inferior}>
										<View style={[styles.paragraph, styles.buttonFlexBox]}>
											  <Text style={[styles.accedeALa, styles.accedeALaTypo]}>Accede a la información y registros almacenados</Text>
										</View>
								  </View>
								  <View style={[styles.button, styles.buttonFlexBox]}>
										<Text style={[styles.accederAlMen, styles.accedeALaTypo]}>Acceder al menú</Text>
								  </View>
							</View>
					  </View>
				</SafeAreaView>);
	};
	
	const styles = StyleSheet.create({
		  container: {

		  },
		  buttonFlexBox1: {
				gap: Gap.gap_10,
				flexDirection: "row"
		  },
		  heading3Position: {
				left: "50%",
				top: "50%",
				position: "absolute"
		  },
		  buttonFlexBox: {
				alignSelf: "stretch",
				justifyContent: "center",
				alignItems: "center"
		  },
		  accedeALaTypo: {
				fontSize: 7,
				textAlign: "left",
				fontFamily: FontFamily.arial
		  },
		  view: {
				width: "100%",
				height: 330,
				position: "absolute",
				flex: 1
		  },
		  card: {
				height: "100%",
				top: 10,
				borderRadius: 14,
				backgroundColor: Color.colorWhite,
				borderStyle: "solid",
				borderColor: Color.colorGainsboro,
				borderWidth: 1,
				overflow: "hidden",
				justifyContent: "center",
				alignItems: "center",
				left: 10,
				width: 181,
				position: "absolute"
		  },
		  superior: {
				width: 180,
				padding: Padding.padding_10,
				height: Height.height_32,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center"
		  },
		  menucardIcon: {
				width: 32,
				borderRadius: 16,
				zIndex: 0,
				top: "50%",
				marginTop: -16.33,
				height: Height.height_32,
				left: 10,
				position: "absolute"
		  },
		  heading3: {
				width: 138,
				marginLeft: -47.5,
				zIndex: 1,
				marginTop: -16.33,
				left: "50%",
				height: Height.height_32
		  },
		  baseDeDatos: {
				marginTop: -13,
				fontSize: 8,
				lineHeight: 27,
				fontWeight: "700",
				textAlign: "left",
				fontFamily: FontFamily.arial,
				color: Color.colorBlack,
				top: "50%",
				left: 10,
				position: "absolute"
		  },
		  inferior: {
				height: 28,
				width: 181
		  },
		  paragraph: {
				height: 38,
				paddingHorizontal: 15,
				paddingVertical: Padding.padding_10
		  },
		  accedeALa: {
				width: 151,
				height: 18,
				marginTop: -9,
				marginLeft: -75.5,
				lineHeight: 8,
				color: Color.colorDimgray,
				left: "50%",
				top: "50%",
				position: "absolute",
				zIndex: 0
		  },
		  button: {
				borderRadius: 8,
				gap: Gap.gap_10,
				flexDirection: "row"
		  },
		  accederAlMen: {
				width: 53,
				lineHeight: 20,
				color: Color.colorBlack
		  },
		  icon: {
				height: 16,
				width: 16,
				color: Color.colorBlack
		  }
	});