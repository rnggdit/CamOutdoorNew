import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Element3, HambergerMenu, Home, Icon, Notification, Profile, SearchFavorite, SearchFavorite1, SearchNormal, SearchNormal1, ShoppingCart, Wallet } from 'iconsax-react-native';
import { BlogList, CategoryList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCard}>
          <FlatListCategory/>
        </View>
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall style={styles.card2} item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const ItemCategory = ({ item, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{ ...category.title, color }}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({ item }) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function HomeApp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CampOutdoor</Text>
        <HambergerMenu color={colors.black()} variant="Linear" size={25} />
      </View>
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
          <View style={styles.inputContainer}>
            <SearchNormal1 color={colors.black()} variant="Linear" size={20}/>
            <TextInput
                style={{flex: 1, fontSize: 18, paddingHorizontal: 10}}
                placeholder="Search"
                />
          </View>
        </View>
      <ListBlog />
      <View style={styles.header}>
        <Home color={colors.black()} variant="Linear" size={25} />
        <ShoppingCart color={colors.black()} variant="Linear" size={25} />
        <Wallet color={colors.black()} variant="Linear" size={25} />
        <Notification color={colors.black()} variant="Linear" size={25} />
        <Profile color={colors.black()} variant="Linear" size={25} />  
      </View>
    </View>
  );
}

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
  title: {
    fontSize: 30,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
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
    flexWrap: 'wrap'
  },
  inputContainer: {
    flex: 1,
    height: 45,
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: Colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
});