import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, Gap } from '../../components'

const Home_temp = ({navigation}) => {
  return (
    <View style={styles.page}>
        <View style={styles.contentWrapper}>
            <Header title="Page under construction" />
            <Gap height={26} />
            <Text style={styles.Text}>Please choose the button below</Text>
            <Gap height={18} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Gap height={18} />
        <Button title="Profile" onPress={() => navigation.navigate('About')} />
        </View>
    </View>
  )
}

export default Home_temp

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    Text: {
        color: 'black',
    },

    contentWrapper: {
        flex: 1,
        backgroundColor: '#FEC58C',
        paddingHorizontal: 24,
    }
})