import React from 'react';
// import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import {ActivityIndicator, View} from 'react-native';

const Routes = () => {
  const {signed, loading} = useAuth();
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
