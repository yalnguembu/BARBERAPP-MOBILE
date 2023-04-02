import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("accessToken", JSON.stringify(token));
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    return token ? JSON.parse(token) : "";
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("accessToken");
  } catch (error) {}
};

export const clearToken = async () => {
  await AsyncStorage.clear();
};
