import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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
        fontWeight: '400',
        textAlign: 'center',
        color: colors.mediumGray,
    },
    bold: {
        fontSize:26,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: colors.darkGray,
    },
    primaryText:{
        textTransform: 'uppercase',
        fontSize:16,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft:20,
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
        width:'100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius:20,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent:'space-around',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
    },
    
    arrowContainer:{
        backgroundColor: colors.secondary,
        width:50,
        height: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})


export {colors, theme, text};
