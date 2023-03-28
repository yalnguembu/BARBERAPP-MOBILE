import { View } from "react-native-web";
import Service from "./Service";

function ServicesList({ services }) {
  return (
    <View>
      {services.map((service, index) => (
        <Service
          key={index}
          service={service}
          onClick={() =>
            navigation.navigate("detail", { product: service.text })
          }
        />
      ))}
    </View>
  );
}
