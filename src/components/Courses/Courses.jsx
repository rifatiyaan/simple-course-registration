import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleCarts}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='grid grid-cols-3'>
            {
                courses.map(course => <Course key={course.id} course={course} handleCarts={handleCarts}></Course>)
            }

        </div>
    );
};
Courses.propTypes = {
    handleCarts : PropTypes.func,
}
export default Courses;