import React, { Component } from 'react';
import Router from './Router';
import { Root } from "native-base";
import WSManager, { NavigationService } from './Networking/WSManager'
import { Font } from 'expo';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {

        await Font.loadAsync({
            'font1ExtraBold': require('./assets/fonts/Roboto-Bold.ttf'),
            'HKGothicExtraBold': require('./assets/fonts/Roboto-Bold.ttf'),
            'font2Light': require('./assets/fonts/Roboto-Light.ttf'),
            'HKGroteskLight': require('./assets/fonts/Roboto-Light.ttf'),
            'font2Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'HKGroteskRegular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Ionicons': require('./assets/fonts/Ionicons.ttf'),
            'Roboto': require("native-base/Fonts/Roboto.ttf"),
            'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
            'font1Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'font1Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'font1Italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
        });
        this.setState({ fontLoaded: true });
    }


    componentWillMount() {
    }

    render() {

        return (
            <Root>
                {
                    this.state.fontLoaded &&
                    <Router ref={navigatorRef => {
                        WSManager.setTopLevelNavigator(navigatorRef);
                    }} />
                }
            </Root>
        );
    }
}

// console.disableYellowBox = true;

export default App
