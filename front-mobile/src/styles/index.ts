import { Dimensions, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const colors = {
    white: "#FFFFFF",
    lightGray: "#F5F5F5",
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
    },



})

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const navBar = StyleSheet.create({
    container:{
        flexDirection: "row",        
    },
    leftText:{
        fontSize: 16,
        marginLeft: 20,
        fontWeight: "bold",
        color: colors.white,
    },
    drawer:{
        marginRight: 20,
        marginTop:5,        
    },
    options:{
        width: deviceWidth,
        height:200,
        backgroundColor: colors.primary,
        color: colors.white,
        marginTop: 200,        
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
    btnSair:{
        width:60,
        height: 30,
        borderWidth: 1,
        borderRadius:10,
        borderColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    txtSair:{
        color: colors.white,
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

const tabBar = StyleSheet.create({
    container:{
        width: deviceWidth,
        height: 80,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    pill:{
       padding: 15,
       backgroundColor: colors.lightGray,
       borderRadius:30,
    },
    pillActive:{
        backgroundColor:colors.bluePill,
    },

    pillText:{
        fontWeight: "bold",
        color: colors.mediumGray,
    },
    pillTextActive:{
        color:colors.primary,
    },

})

const admin = StyleSheet.create({
    container:{        
        padding: 10,
        alignItems:"center",
    },
    addButton:{
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textAddButton:{
        color: colors.white,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    buttonContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    btnExcluir:{
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.red,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textBtnExcluir:{
        textTransform:"uppercase",
        fontWeight: "bold",
        color:colors.red,
    },
    btnEditar:{
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textBtnEditar:{
        textTransform:"uppercase",
        fontWeight: "bold",
        color:colors.mediumGray,
    },
    btnSave:{
        width: "48%",
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.primary,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textBtnSave:{
        textTransform:"uppercase",
        fontWeight: "bold",
        color:colors.white,
    }

})

const form = StyleSheet.create({
    container:{
        width: deviceWidth,
        padding:20,

    },
    card:{
        width: "100%",
        height: "90%",
        backgroundColor: colors.white,
        borderRadius:20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around",
    },
    modalContainer:{
        width:deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center",

    },
    modalContent:{
        width:300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    }, 
    modlaItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    input:{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical:15,
    },
    textInput:{
        width: "100%",
        maxWidth: "100%",
        height:200,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius:10,
        padding: 10,
        marginVertical: 10,
        alignItems:"baseline",

    },
    selectInput:{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,            
        justifyContent: "center",          
    },
    btnUpload:{
       width:"100%",
       height: 40,
       backgroundColor: colors.mediumGray,
       borderRadius: 10,
       alignItems: "center",
       justifyContent: "center",  
    },
    txtUpload:{
        color: colors.white,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    txtFileSize:{
        color: colors.primary,
        fontSize: 12,
        fontWeight: "300",
        marginVertical: 5,
    },
})


export {colors, theme, text, navBar, login, tabBar, admin, form};
