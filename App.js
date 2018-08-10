import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
	handlePress() {
		Alert.alert(
			'WOAH!',
			'You pressed the mystery button',
			[
				{
					text: 'Cool!',
					onPress: () => console.log('Ask me later pressed')
				},
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'Wtf', onPress: () => console.log('OK Pressed') }
			],
			{ cancelable: false }
		)
	}

	render() {
		let pic = {
			uri: 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg'
		}
		return (
			<View style={styles.container}>
				<Image source={pic} style={styles.header} />
				<Text style={{ color: 'white', fontSize: 40 }}>Guess the Movie!</Text>
				<Button title="????" onPress={this.handlePress} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7ca982',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	header: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: 193,
		height: 110,
		margin: '20%'
	}
})
