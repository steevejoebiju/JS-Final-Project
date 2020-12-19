import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

import CoursesRoutes from '../../Courses/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
      <CoursesRoutes/>
    </>
  );
}
 
export default Routes;