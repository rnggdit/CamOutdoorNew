import {ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import {Bank, HambergerMenu, Home, Home3, LocationDiscover, Lock1, Logout, Lovely, Notification, Profile, ProfileCircle, Setting2, ShoppingCart, Wallet, Wallet2} from 'iconsax-react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';
import { Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { formatDate } from '../../utils/formatDate';
import { formatNumber } from '../../utils/formatNumber';
import ActionSheet from 'react-native-actions-sheet';


const ProfileApp = () => {
  const verticalData = BlogList.slice(5);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const user = auth().currentUser;
    const fetchBlogData = () => {
      try {
        if (user) {
          const userId = user.uid;
          const blogCollection = firestore().collection('blog');
          const query = blogCollection.where('authorId', '==', userId);
          const unsubscribeBlog = query.onSnapshot(querySnapshot => {
            const blogs = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            setBlogData(blogs);
            setLoading(false);
          });

          return () => {
            unsubscribeBlog();
          };
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
              fetchBlogData();
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchBlogData();
    fetchProfileData();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={profile.tag4}>Profile</Text>
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
              uri: profileData?.photoUrl,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{gap: 5, alignItems: 'baseline'}}>
            <Text style={profile.name}>{profileData?.fullName}</Text>
            <Text style={profile.info}>
              Member since {formatDate(profileData?.createdAt)}
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
          <TouchableOpacity
          onPress={handleLogout}>
          <View style={{flexDirection: 'row', gap: 10}}>
          <Logout color={colors.black()} variant="Linear" size={25} />
          <Text
            style={profile.tag2}> Log out
          </Text>
          </View>
        </TouchableOpacity>
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
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 50},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Philo-Bold'],
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
    fontFamily: fontType['Philo-Bold'],
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