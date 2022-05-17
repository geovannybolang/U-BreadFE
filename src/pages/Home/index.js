import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { HeaderCenter, Rectangle, Gap } from '../../components';
import { 
  RotiSrikaya, 
  RotiCokelat,
  RotiCokelatKeju,
  RotiCokelatKacang
} from '../../assets/icon';
// import { RotiSrikaya} from '../../assets/image';
const Home = ({onPress}) => {
  return (
    <View style={styles.page}>
      <HeaderCenter title="Menu" />
      {/* <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <Text style={styles.Text}>
            User
          </Text>
          </View>
          <View style={styles.container2}>
          <Text style={styles.Text}>
            Menu
          </Text>
          </View>
          <View style={styles.container3}>
          <Text style={styles.Text}>
            Cart
          </Text>
          </View>
          </View> */}
          <View style={styles.body}>
          <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.container1}>
          <View style={styles.b1}>
            <RotiSrikaya />
            <Text style={styles.food}>Roti Srikaya</Text>
            <Text style={styles.price}>Rp 10.000 PROMO!</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Gap height={40} />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.container1}>
          <View style={styles.b1}>
            <RotiCokelat />
            <Text style={styles.food}>Roti Cokelat</Text>
            <Text style={styles.price}>Rp 18.000</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Gap height={40} />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.container1}>
          <View style={styles.b1}>
            <RotiCokelatKeju />
            <Text style={styles.food}>Roti Cokelat Keju</Text>
            <Text style={styles.price}>Rp 29.000</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Gap height={40} />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.container1}>
          <View style={styles.b1}>
            <RotiCokelatKacang />
            <Text style={styles.food}>Roti Cokelat Kacang</Text>
            <Text style={styles.price}>Rp 25.000</Text>
          </View>
        </View>
      </TouchableOpacity>
            
          </View>
      </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentWrapper: {
    // paddingLeft: 24,
    // paddingVertical: 38,
    // paddingBottom: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  contentWrapper2: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper3: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },


  Text: {
    paddingTop: 17,
    paddingLeft: 9,
    paddingHorizontal: 90,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },

  Text2: {
    paddingTop: 17,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    // alignSelf: 'flex-start',
    // flexDirection: 'column',
  },

  Text3: {
    paddingTop: 17,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },

  body: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: '#FEC582',
    paddingTop: 20,
    paddingLeft: 10,
  },
  container1: {
    paddingTop: 10,
    backgroundColor: '#EBEBEB',
    paddingLeft: 17,
    width: 325,
    // height: 70,
    // paddingEnd: 10,
    borderRadius: 7,
  },
  b1: {
    width: 100,
    left: 35,
    top: 10,
},

price: {
  color: 'black',
  top: -50,
  left: 90,
},

food: {
  color: 'black',
  left: 90,
  fontSize: 15,
  top: -47,
},

})