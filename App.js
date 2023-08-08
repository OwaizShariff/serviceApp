import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BrowserRouter } from 'react-router-dom';
import Login from './src/Screens/Login'
import SignUp from './src/Screens/SignUp'
import Launch from './src/Screens/Launch';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator screenOptions={{headerShown: false}}>
  //     <Stack.Screen
  //       name="Home"
  //       component={Launch}
  //       options={{title: 'Login'}}
  //     />
  //     <Stack.Screen name="Login" component={Login} />
  //     <Stack.Screen name="SignUp" component={SignUp} />
  //   </Stack.Navigator>
  // </NavigationContainer>
    // <View>
    //    <Login />
    //    <SignUp />
    // </View>
    <BrowserRouter>
      <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen
        name="Home"
        component={Launch}
        // options={{title: 'Login'}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  </BrowserRouter>
  )
}

export default App

// import React from 'react';
// import type {Node} from 'react';


// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="OWAIZ SHARIFF">
//             Hi, how are you? what are you doing? you good?
//           </Section>
//           <Section title="See Your Changesssss">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next: 
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 2,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
