import { Dimensions, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray:"#9e9e9e",
    darkGray:"#263238",
    black:"#000000",
    primary:"#407BEE",
    secondary:"#33569b",
    bluePill:"#407BFF61",
    red:"#dF5753"
}


const text = StyleSheet.create({
    regular: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.mediumGray,
    },
    bold: {
        fontSize:26,
        fontWeight:"bold",
        textAlign: "center",
        marginBottom: 25,
        color: colors.darkGray,
    },
    primaryText:{
        textTransform: "uppercase",
        fontSize:16,
        fontWeight: "bold",
        color: colors.white,
        marginLeft:20,
    },
    productName:{
        fontSize:16,
        fontWeight: "bold",

    },
    productCurrency:{
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },
    productPrice:{
        fontSize: 30,
        fontWeight: "bold",
        color: colors.primary,
    },
    goBack:{
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.darkGray,
        margin:16,
    },
    producDetailName:{
        fontSize:30,
        fontWeight: "bold",
        color: colors.darkGray,
        marginTop:10,
    },
    productionDescription:{
        fontSize:16,
        color: colors.mediumGray,
    },

})

const theme = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        padding: 20,
    },   

    card:{
        width:"100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius:20,
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent:"space-around",
        //elevation: 5,
    },

    draw:{
        width:313,
        height:225,
    },

    textContainer:{
        paddingHorizontal:20,
    },

    primaryButton:{
        width:290,
        height:50,
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    
    arrowContainer:{
        backgroundColor: colors.secondary,
        width:50,
        height: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    //Product Card

    scrollCOntainer:{
        padding: 20, 
    },

    productCard:{
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical:10,
        //elevation: 1,
    },
    productDescription:{
        width: "100%",
        padding: 20,
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,
    },

    priceContainer:{
        flexDirection: "row",
        marginTop: 10,
    },

    productImage:{
        width:140,
        height:140,
        margin:16,
    },

    //Search Input
    inputContainer:{
        width: "100%",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",        
        marginVertical:12,
        paddingVertical:10,
        //elevation: 5,
    },
    inputSearch:{
        width: "90%",
        height:40,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.mediumGray,
    },

    //Product details
    detailContainer:{
        backgroundColor: colors.lightGray,
        padding:20,
    },

    detailCard:{
        width:"100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius:20,              
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        justifyContent:"space-around",
        padding:20,
        //elevation: 5,
    },

    prodructCardImageContainer:{
        width:"100%",
        borderWidth: 1,
        borderColor: colors.lightGray,
        alignItems: "center",
        borderRadius: 20,
    },

    producCardtImage:{
        width: 200,
        height: 200,
    },

    goBackContainer:{
        width:290,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 10,
    },

    scrollTextContainer:{
        marginVertical:20,
        padding:20,
        borderWidth: 0.5,
        borderRadius:10,
        borderColor: colors.lightGray,
    }

})

const deviceWidth = Dimensions.get('window').width;

const navBar = StyleSheet.create({
    leftText:{
        fontSize: 16,
        marginLeft: 20,
        fontWeight: "bold",
        color: colors.white,
    },
    drawer:{
        marginRight: 20,
    },
    options:{
        width: deviceWidth,
        height:160,
        backgroundColor: colors.primary,
        color: colors.white,
        marginTop: 160,        
        padding: 20,
        justifyContent: "space-between",              
    },

    option:{
        paddingVertical: 10,
    },

    textOption:{
        color: colors.white,
        textTransform: "uppercase",
    },
    textActive:{
        fontWeight:"bold",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",

    },



})

const login = StyleSheet.create({
    card:{
        width:"100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius:20,
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent:"center",
        
    },
    form:{
        marginVertical: 10,
    },
    passwordContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    textInput:{
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
    },
    toggle:{
        marginLeft: -40,
    },
    title:{
        fontSize: 30,
        fontWeight: "400",
        textTransform: "uppercase",
        color: colors.darkGray,
        marginBottom: 50,
    },
    eyes:{},
    buttonTextContainer:{},

})

export {colors, theme, text, navBar, login};
