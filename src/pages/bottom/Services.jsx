import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Service from "../../components/Services/Service";
import TabBar from "../../components/Services/TabBar";

function Services({ route, navigation }) {
  const originalServices = [
    {
      text: "Coupe simple",
      img: require("../../assets/images/service-1.png"),
      desc: "lorem ipsum description text",
      categories: "Coupe",
    },
    {
      text: "Tracage",
      img: require("../../assets/images/service-2.png"),
      desc: "lorem ipsum description text",
      categories: "Tracage",
    },
    {
      text: "Lavage",
      img: require("../../assets/images/service-3.png"),
      desc: "lorem ipsum description text",
      categories: "Lavage",
    },
    {
      text: "Teinte",
      img: require("../../assets/images/service-4.png"),
      desc: "lorem ipsum description text",
      categories: "Teinte",
    },
    {
      text: "Taille de barbe",
      img: require("../../assets/images/service-5.png"),
      desc: "lorem ipsum description text",
      categories: "Barbe",
    },
    {
      text: "Tresse",
      img: require("../../assets/images/service-6.png"),
      desc: "lorem ipsum description text",
      categories: "Tresse",
    },
  ];
  let defaultTab = "tout";

  if (typeof route.params !== "undefined") {
    const { categorie } = route.params;
    if (typeof categorie !== "undefined") {
      defaultTab = categorie;
    }
  }
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [services, setServices] = useState(originalServices);

  const handelActiveTab = (tab) => {
    setActiveTab(tab);
    // filterServices()
  };
  // const filterServices = () => {
  //   if (activeTab !== "tout") {
  //     const filter = (service) => {
  //       return service.categories === activeTab;
  //     };
  //     const filteredServices = originalServices.filter(filter);
  //     setServices(filteredServices);
  //   }
  //   else setServices(originalServices)
  // };

  useEffect(() => {
    if (typeof route.params !== "undefined") {
      const { categorie } = route.params;
      if (typeof categorie !== "undefined") {
        defaultTab = categorie;
      }
    }
  }, []);

  function ServicesList() {
    return (
      <View style={styles.servicesBox}>
        {services.map((service, index) => (
          <Service
            key={index}
            service={service}
            onClick={() =>
              navigation.navigate("detail", { product: service.text })
            }
          />
        ))}
        {services.length < 1 && (
          <Text>Aucun services ne corresponde a votre recherche</Text>
        )}
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <Ionicons size={22} name="search" color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TabBar handelActiveTab={handelActiveTab} activeTab={activeTab} />
        <ServicesList />
      </View>
    </ScrollView>
  );
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 15,
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  servicesBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 80,
  },
});
