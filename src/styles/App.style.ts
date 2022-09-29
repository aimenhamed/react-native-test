import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 75,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  section: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    width: 300,
    textAlign: "left",
    fontSize: 32,
    fontWeight: "bold",
  },
  profile: {
    marginTop: 50,
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: "#cccccc",
    borderRadius: 40,
    width: 100,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 4,
    },
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 25,
  },
  fact: {
    fontSize: 18,
    marginTop: 16,
    shadowOpacity: 0,
  },
  facts: {
    backgroundColor: "#ededed",
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    width: "100%",
    textAlign: "left",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 4,
    },
  },
});
