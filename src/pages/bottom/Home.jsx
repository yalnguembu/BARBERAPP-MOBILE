// import { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   Pressable,
//   TouchableOpacity,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Service from "../../components/Home/Service";

// function Home({ navigation }) {
//   const originalServices = [
//     {
//       text: "Coupe",
//       img: require("../../assets/images/service-1.png"),
//       desc: "lorem ipsum description text",
//     },
//     {
//       text: "Tracage",
//       img: require("../../assets/images/service-2.png"),
//       desc: "lorem ipsum description text",
//     },
//     {
//       text: "Lavage",
//       img: require("../../assets/images/service-3.png"),
//       desc: "lorem ipsum description text",
//     },
//     {
//       text: "Teinte",
//       img: require("../../assets/images/service-4.png"),
//       desc: "lorem ipsum description text",
//     },
//     {
//       text: "Barbe",
//       img: require("../../assets/images/service-5.png"),
//       desc: "lorem ipsum description text",
//     },
//     {
//       text: "Tresse",
//       img: require("../../assets/images/service-6.png"),
//       desc: "lorem ipsum description text",
//     },
//   ];
//   const [searchInput, setSearch] = useState("");
//   const [services, setServices] = useState(originalServices);

//   const handelSearch = (e) => setSearch(e.target.value);
//   const search = () => {
//     function check(item) {
//       return item.text == searchInput;
//     }
//     setServices(services.filter(check));
//   };
//   const backSearch = () => {
//     setSearch("");
//     setServices(originalServices);
//   };

//   return (
//     <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
//       <View style={styles.header}>
//         <View style={styles.flexBox}>
//           <View>
//             <Text style={styles.username}>Hi Username,</Text>
//             <Text style={styles.welcome}>Bienvenu!</Text>
//           </View>
//           <TouchableOpacity style={styles.notificationBtn} onPress={()=>{navigation.navigate("notification")}} >
//             <Ionicons name="notifications" size={25} color="#fff" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.locationBox}>
//           <Ionicons name="location" size={25} color="#fff" />
//           <Text style={styles.position}>Douala Pk8 entrée laïc</Text>
//         </View>
//         <View style={styles.searchBox}>
//           {searchInput === "" ? (
//             <></>
//           ) : (
//             <Pressable onPress={backSearch}>
//               <Ionicons name="arrow-back" size={25} color="gray" />
//             </Pressable>
//           )}
//           <TextInput
//             placeholder="Recherche..."
//             style={styles.searchInput}
//             value={searchInput}
//             onChange={handelSearch}
//           />
//           <Pressable onPress={search}>
//             <Ionicons name="search" size={25} color="gray" />
//           </Pressable>
//         </View>
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.h2}>Nos services</Text>
//         <View style={styles.servicesBox}>
//           {services.map((service, index) => (
//             <Service
//               key={index}
//               service={service}
//               onClick={() =>navigation.navigate("services", { categorie: service.text })
//               }
//             />
//           ))}
//           {services.length < 1 ? (
//             <Text>Aucun services ne corresponde a votre recherche</Text>
//           ) : (
//             <></>
//           )}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// export default Home;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     padding: 20,
//   },
//   container: {
//     paddingBottom: 110,
//   },
//   header: {
//     width: "100%",
//     marginBottom: 20,
//     backgroundColor: "#202020",
//     borderRadius: 10,
//     padding: 15,
//   },
//   flexBox: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   locationBox: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   position: {
//     color: "#fff",
//     fontSize: 17,
//     fontWeight: "500",
//     marginLeft: 5,
//   },
//   username: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "300",
//   },
//   welcome: {
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "500",
//   },
//   notificationBtn: {
//     backgroundColor: "#ffffff20",
//     padding: 10,
//     borderRadius: 5,
//     height: 50,
//   },
//   h1: {
//     fontSize: 30,
//     fontWeight: "700",
//   },
//   h2: {
//     fontSize: 21,
//     marginBottom: 15,
//     fontWeight: "bold",
//   },
//   servicesBox: {
//     width: "100%",
//   },
//   searchBox: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 10,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     backgroundColor: "#fff",
//   },
//   searchInput: {
//     borderWidth: 0,
//     fontSize: 19,
//     width: "80%",
//   },
// });

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Service from "../../components/Home/Service";

function Home({ navigation }) {
  const originalServices = [
    {
      text: "Coupe",
      img: require("../../assets/images/service-1.png"),
      desc: "lorem ipsum description text",
    },
    {
      text: "Tracage",
      img: require("../../assets/images/service-2.png"),
      desc: "lorem ipsum description text",
    },
    {
      text: "Lavage",
      img: require("../../assets/images/service-3.png"),
      desc: "lorem ipsum description text",
    },
    {
      text: "Teinte",
      img: require("../../assets/images/service-4.png"),
      desc: "lorem ipsum description text",
    },
    {
      text: "Barbe",
      img: require("../../assets/images/service-5.png"),
      desc: "lorem ipsum description text",
    },
    {
      text: "Tresse",
      img: require("../../assets/images/service-6.png"),
      desc: "lorem ipsum description text",
    },
  ];
  const [services, setServices] = useState(originalServices);

  const categories = [
    {
      title: "Coupe",
      image: require("../../assets/images/cat-5.png"),
    },
    {
      title: "Soins",
      image: require("../../assets/images/cat-2.png"),
    },
    {
      title: "Barbe",
      image: require("../../assets/images/cat-4.png"),
    },
    {
      title: "Teinte",
      image: require("../../assets/images/cat-1.png"),
    },
    {
      title: "Tracage",
      image: require("../../assets/images/cat-3.png"),
    },
    {
      title: "Tresse",
      image: require("../../assets/images/cat-6.png"),
    },
  ];

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.salutation}>Salut,</Text>
          <Text style={styles.username}>Username!</Text>
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            navigation.navigate("search");
          }}
        >
          <Ionicons name="search" size={25} color="#333" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titleLocation}>Nous somme situé a</Text>
        <Text style={styles.textLocation}>Douala Pk8 entrée laïc</Text>
      </View>
      <TouchableOpacity
        style={styles.locationBox}
        onPress={() => navigation.navigate("map")}
      >
        <View>
          <Text style={styles.mainText}>The Ghost Barber,</Text>
          <Text style={styles.secondText}>25km</Text>
          <Text style={styles.thirdText}>Estimation 25 min</Text>
        </View>
        <Ionicons name="chevron-forward" size={25} color="#fff" />
      </TouchableOpacity>
      <View>
        <View style={styles.flexBox}>
          <Text style={styles.h1}>Découvrez par catégories</Text>
          <Ionicons name="chevron-forward" size={20} color="#333" />
        </View>
        <ScrollView
          style={styles.catContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("services", { categorie: cat.title })}
              key={index}
              style={styles.catBox}
            >
              <Image source={cat.image} style={styles.imageCat} />
              <Text style={styles.textCat}>{cat.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <View style={styles.flexBox}>
          <Text style={styles.h1}>Nos realisations récentes</Text>
          <TouchableOpacity>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#333"
              onPress={() => navigation.navigate("gallery")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.servicesBox}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {services.map((service, index) => (
            <Service
              key={index}
              service={service}
              onClick={() =>
                navigation.navigate("gallery", { img: service.text })
              }
            />
          ))}
          {services.length < 1 ? (
            <Text>Aucun services ne corresponde a votre recherche</Text>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
  },
  container: {
    paddingBottom: 90,
  },
  header: {
    width: "100%",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleLocation: {
    fontSize: 17,
    color: "#888",
  },
  textLocation: {
    fontSize: 23,
    fontWeight: "500",
  },
  locationBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    backgroundColor: "#202020",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  mainText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 7,
  },
  secondText: {
    color: "lightgray",
    fontSize: 14,
    marginBottom: 7,
  },
  thirdText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 7,
  },
  position: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 5,
  },
  username: {
    fontSize: 19,
    fontWeight: "500",
  },
  salutation: {
    fontSize: 17,
  },
  searchBtn: {
    padding: 10,
    borderRadius: 5,
    height: 50,
  },
  h1: {
    fontSize: 17,
    fontWeight: "500",
  },
  catContainer: {
    width: Dimensions.get("screen").width - 30,
    paddingTop: 20,
    marginBottom: 15,
  },
  catBox: {
    width: (Dimensions.get("screen").width - 30) / 3 - 15,
    backgroundColor: "#FFF269",
    padding: 15,
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    paddingBottom: 8,
    elevation: 5,
  },
  imageCat: {
    width: 70,
    height: 50,
  },
  textCat: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    color:"#395D70"
  },
  servicesBox: {
    width: "100%",
  },
  searchBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    borderWidth: 0,
    fontSize: 19,
    width: "80%",
  },
});
