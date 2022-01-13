import { NavigationProp, RouteProp } from "@react-navigation/core"

export type MainNavParamList = {
  ProductsRoute: undefined;
  CartRoute: undefined;
}

export type MainRouteProps = NavigationProp<MainNavParamList>;
export type ProductsRouteProps = RouteProp<MainNavParamList, 'ProductsRoute'>;
export type CartRouteProps = RouteProp<MainNavParamList, 'CartRoute'>;
