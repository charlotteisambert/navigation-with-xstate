import {
  createNavigatorFactory,
  ParamListBase,
  StackActionHelpers,
  StackNavigationState,
  StackRouter,
  StackRouterOptions,
  useNavigationBuilder,
} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  NativeStackView,
} from "@react-navigation/native-stack";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import * as React from "react";

const FlowRouter = (options) => {
  const router = StackRouter(options);

  return {
    ...router,
    getStateForAction(state, action, options) {
      switch (action.type) {
        case "NEXT":
          const nextRouteName = state.routeNames[state.index + 1];

          if(!nextRouteName){
            console.error('COULD NOT FIND NEXT SCREEN FOR CURRENT ROUTE');
            return;
          }

          return router.getStateForAction(
            state,
            {
              type: "NAVIGATE",
              source: action.source,
              payload: { name: nextRouteName },
            },
            options
          );

        case "BACK":
          const previousRouteName = state.routeNames[state.index - 1];

          if(!previousRouteName){
            console.error('COULD NOT FIND PREVIOUS SCREEN FOR CURRENT ROUTE');
            return;
          }

          return router.getStateForAction(
            state,
            {
              type: "NAVIGATE",
              source: action.source,
              payload: { name: previousRouteName },
            },
            options
          );

        default:
          return router.getStateForAction(state, action, options);
      }
    },

    actionCreators: {
      ...router.actionCreators,
      clearHistory() {
        return { type: "CLEAR_HISTORY" };
      },
    },
  };
};

function FlowNavigator({
  id,
  initialRouteName,
  children,
  screenListeners,
  screenOptions,
  ...rest
}: NativeStackNavigatorProps) {
  const { state, descriptors, navigation, NavigationContent } =
    useNavigationBuilder<
      StackNavigationState<ParamListBase>,
      StackRouterOptions,
      StackActionHelpers<ParamListBase>,
      NativeStackNavigationOptions,
      NativeStackNavigationEventMap
    >(FlowRouter, {
      id,
      initialRouteName,
      children,
      screenListeners,
      screenOptions,
    });

  return (
    <NavigationContent>
      <NativeStackView
        {...rest}
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </NavigationContent>
  );
}

export const createFlowNavigator = createNavigatorFactory<
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  typeof FlowNavigator
>(FlowNavigator);
