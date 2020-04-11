import React from 'react';

import{ createAppContainer} from "react-navigation";
import{ createDrawerNavigator} from "react-navigation-drawer";


import{
  Rateus,
  Feedback,
  Faq,
  Logout
 

} from "./screens";
import SideBar from './components/sidebar';

const DrawerNavigator=createDrawerNavigator({
  Rateus,
  Feedback,
  Faq,
  Logout
  },{
  contentComponent: props=><SideBar{...props}/>
});
export default createAppContainer(DrawerNavigator);