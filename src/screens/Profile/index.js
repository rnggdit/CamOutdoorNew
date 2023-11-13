import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Bank, HambergerMenu, Home, Home3, LocationDiscover, Lock1, Lovely, Notification, Profile, ProfileCircle, Setting2, ShoppingCart, Wallet, Wallet2} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

const verticalData = BlogList.slice(5);
const ProfileApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={profile.tag4}>Akun Saya</Text>
        <HambergerMenu color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 10,
            paddingVertical: 10,
        }}>
        <View style={{gap: 15, alignItems: 'baseline'}}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{gap: 5, alignItems: 'baseline'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>
              Member {ProfileData.member}
            </Text>
            <View style={{flexDirection: 'row', gap: 20}}>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.following)}
              </Text>
              <Text style={profile.tag}>Follower</Text>
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.follower)}
              </Text>
              <Text style={profile.tag}>Following</Text>
            </View>
            </View>
          </View>
          </View>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', gap: 10}}>
          <Home3 color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Daftar Alamat</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
          <Bank color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Rekening Bank</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
          <Wallet2 color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Pembayaran Instan</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
          <Lock1 color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Keamanan Akun</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
          <Notification color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Notifikasi</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
          <ProfileCircle color={colors.black()} variant="Linear" size={25} />
          <Text style={profile.tag2}>Privasi Akun</Text>
          </View>
          </View>
      </ScrollView>
      <Text style={profile.tag3}>Rekomendasi Untuk Anda</Text>
      <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall style={styles.card2} item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  header2: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  card2: {
    width: '50%',
  },
  listCard: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 35,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 50},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  tag2: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  tag3: {
    paddingHorizontal: 24,
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  tag4: {
    paddingHorizontal: 0,
    fontSize: 25,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  buttonEdit: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonEdit2: {
    paddingHorizontal: 150,
    paddingVertical: 140,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});