import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabs from '../components/organisms/HomeTabs';

const Tab = createMaterialTopTabNavigator();

const HomeTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Admin"
        component={HomeTabs}
        initialParams={{tabTitle: 'Admin'}}
      />
      <Tab.Screen
        name="Employee"
        component={HomeTabs}
        initialParams={{tabTitle: 'Employee'}}
      />
      <Tab.Screen
        name="Customer"
        component={HomeTabs}
        initialParams={{tabTitle: 'Customer'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsNavigation;
