import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);

  const [courses, sets] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/courses`)
    .then(({ data }) => {
      sets(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the courses: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Courses"/>

      <Container>
        {courses && courses.length > 0 ? (
          courses.map((course, i) => (
            <>
              <block>
                {course.date}: "{course.course}" ~ {course.author}
              </block>

              {user && user.token ? (
                <Link to={`/courses/edit/${course._id}`}>...edit...</Link>
              ) : null}
            </>
          ))
        ) : null}
      </Container>
    </>
  );
}
 
export default Courses;