import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Catalog, Home, ProductDetails } from '../pages';
import { colors, navBar } from '../styles';
import { Text} from 'react-native';
import { NavBar } from '../components';


const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={navBar.leftText}>Catalog</Text>;

const Routes: React.FC =() =>{
    return(
        <Stack.Navigator screenOptions={{
            headerTitle: " ",
            headerStyle:{
                backgroundColor: colors.primary,
            },
            headerLeft: () => <HeaderText />,
            headerRight:() => <NavBar />,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    )
}


export default Routes;