import { createStackNavigator, createAppContainer } from 'react-navigation';
import TestScreen from './Screens/Test/TestScreen';
import { fromRight,fadeIn,fromBottom } from './Animation/AnimationTransitions';



const AppNavigator = createStackNavigator({

  TestScreen:{
    screen: TestScreen
  },
},
  {
    initialRouteName: "TestScreen",
    transitionConfig: (nav) => handleCustomTransition(nav),
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

export default createAppContainer(AppNavigator);


const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there

//   if (nextScene
//     && (nextScene.route.routeName === 'EnterEmail' || nextScene.route.routeName === 'RegisterComplete' || nextScene.route.routeName === 'WebViewPolicy' || nextScene.route.routeName === 'OpenBrowser' || nextScene.route.routeName === 'CreateNewMessage' || nextScene.route.routeName === 'CreatePost' || nextScene.route.routeName === 'SearchLocation')) {
//     return fromBottom();
//   }
//  if(nextScene && (nextScene.route.routeName === 'VideoPlayer' || nextScene.route.routeName === 'ImageGallaryView')){
//     return fadeIn(500);
//   }

  return fromRight(500);
}
