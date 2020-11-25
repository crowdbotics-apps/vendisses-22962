import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20178477Navigator from '../features/BlankScreen20178477/navigator';
import BlankScreen19178476Navigator from '../features/BlankScreen19178476/navigator';
import ArticleList178459Navigator from '../features/ArticleList178459/navigator';
import ArticleList178458Navigator from '../features/ArticleList178458/navigator';
import ArticleList178457Navigator from '../features/ArticleList178457/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20178477: { screen: BlankScreen20178477Navigator },
BlankScreen19178476: { screen: BlankScreen19178476Navigator },
ArticleList178459: { screen: ArticleList178459Navigator },
ArticleList178458: { screen: ArticleList178458Navigator },
ArticleList178457: { screen: ArticleList178457Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
