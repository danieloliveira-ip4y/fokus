import { Text, View, Image, Pressable, StyleSheet } from "react-native";

const handleClick = () => {
  alert("Hello, World!");
};

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require("../assets/fokus/fokus-1.png")} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>

        <Pressable
          style={styles.button}
          onPress={handleClick}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    paddingVertical: 24,
    paddingHorizontal: 24,
    gap: 40
  },
  actions: {
    width: '100%',
    backgroundColor: "#14448080",
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#bb78ff",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 32,
  },
  buttonText: {
    color: "#0211123",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    //
  },
  footerText: {
    textAlign: "center",
    color: '#98A0A8',
    fontSize: 12,
  }
});
