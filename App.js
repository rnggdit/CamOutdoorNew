import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Notification, Receipt21, Clock, Message, Receipt1, ReceiptSearch, ReceiptSquare, Component} from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';

//ori an===========
const ListBlog = () => {
    return (
      <ScrollView>
        <View style={styles.listBlog}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 1}}>
            <View style={{...itemHorizontal.cardItem, marginLeft: 1}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Exploring the World of Electric Cars
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://cdn1.productnation.co/optimized/1024w/stg/sites/5/5cc2e14450c57.webp',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Exploring the World of Electric Cars
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://lh3.googleusercontent.com/p/AF1QipNeZQQMdyUjF3MmW_2te7gPB-aW7XqIE6KgtE7_=w1080-h608-p-no-v0',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Exploring the World of Electric Cars
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://scontent.fcgk3-1.fna.fbcdn.net/v/t31.18172-8/22135508_10155803585632276_4777760961314243366_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFcrxCa9sENhnsgQhSiq-RjUg37MLFrhy1SDfswsWuHLQEVSheevlMBvarVJYy-7K8NNklEE7yoG9DqkwuLnVG_&_nc_ohc=rk0DzghPdOcAX-xT4R7&_nc_ht=scontent.fcgk3-1.fna&oh=00_AfDvCtLhVafa56euatuE2-usjwmTfTY7Rl9dHd9-ahyBUQ&oe=6552E379',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Baking 101: Mastering the Art of Baking
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://areioutdoorgear.co.id/wp-content/uploads/2023/02/Banner-kategori_Outdoor-pack.jpg',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Rediscovering Vinyl: The Resurgence of Analog
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>


          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://thumbor.sirclocdn.com/unsafe/293x293/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/c6e678ff4843a2306873597ce4b1ecc2/t/a/tas-gunung-pria-rhinos-45-ng.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Bags</Text>
                    <Text style={itemVertical.cardTitle}>
                      EIGER RHINOS 45 NG CARRIER
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://www.consina.com/wp-content/uploads/2023/04/new-tenda1-1600x1067.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Tent</Text>
                    <Text style={itemVertical.cardTitle}>
                      Consina Yurt Bell Tent 4m*4m Canvass Cotton Glamping Family
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://thumbor.sirclocdn.com/unsafe/293x293/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/c6e678ff4843a2306873597ce4b1ecc2/p/e/pelindung-tas-ultralight-rain-cover-45l.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Equipment</Text>
                    <Text style={itemVertical.cardTitle}>
                      EIGER ULTRALIGHT RAIN COVER 45L
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://thumbor.sirclocdn.com/unsafe/293x293/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/c6e678ff4843a2306873597ce4b1ecc2/s/e/senter-camping-hybrid-torch.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Equipment</Text>
                    <Text style={itemVertical.cardTitle}>EIGER HYBRID TORCH</Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://www.consina.com/wp-content/uploads/2023/03/6-3.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Bags</Text>
                    <Text style={itemVertical.cardTitle}>
                      CONSINA TRAIL LITE RANSEL GUNUNG TRAVELLING
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://areioutdoorgear.co.id/wp-content/uploads/2022/12/WhatsAppImage2022-09-21at09.27.04-768x768.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Bags</Text>
                    <Text style={itemVertical.cardTitle}>
                      Tas Gunung / Carrier Toba 60 Liter Arei Outdoorgear
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://areioutdoorgear.co.id/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-13.59.15-4-768x768.jpeg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Equipment</Text>
                    <Text style={itemVertical.cardTitle}>
                      Hammock Tent V2 Arei Outdoorgear
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
    
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CampOutdoor</Text>
        <Notification color={colors.black()} variant="Linear" size={25} />
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 7}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Tent
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Bags</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Equipment</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Fashion</Text>
          </View>
          <View style={{...category.item, marginRight: 7}}>
            <Text style={category.title}>Footwear</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category1.item, marginLeft: 18}}>
            <Text style={{...category1.title, color: colors.blue()}}>
              Home
            </Text>
          </View>
          <View style={category1.item}>
            <Text style={category1.title}>Shop</Text>
          </View>
          <View style={category1.item}>
            <Text style={category1.title}>Wallet</Text>
          </View>
          <View style={category1.item}>
            <Text style={category1.title}>Transaction</Text>
          </View>
          <View style={{...category1.item, marginRight: 18}}>
            <Text style={category1.title}>Profil</Text>
          </View>
        </ScrollView>
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
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
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
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})
const category1 = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 390,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  }, 
});
