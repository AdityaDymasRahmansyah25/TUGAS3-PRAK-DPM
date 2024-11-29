import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
        <Image 
          source={require('../headerProfile/profil.webp')}
          style={styles.profileImage} 
        />
      <Text style={styles.text}>Aditya Dimas</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>120</Text>
          <Text style={styles.labelText}>Postingan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>340</Text>
          <Text style={styles.labelText}>Pengikut</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>180</Text>
          <Text style={styles.labelText}>Mengikuti</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#f9f9f9", // Warna latar belakang yang lembut
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#333", // Warna teks yang lebih gelap
  },
  counterContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  labelText: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
  editButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#007bff", // Warna biru
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
