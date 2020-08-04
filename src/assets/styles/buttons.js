import colors from "./colors";
const styles = {
  blueButtonContainer: {
    backgroundColor: colors.primaryColor,
    width: "100%",
    height: 60,
    borderRadius: 8,

    shadowColor: "rgb(82, 123, 255)",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  blueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
};

export default styles;
