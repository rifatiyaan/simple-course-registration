import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const Course = ({course,handleCarts}) => {
    const {cover,title,description,price,credit} = course;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-md h-[520px] my-4">
            <figure className="pt-5">
                <img src={cover} className="rounded-lg" />
            </figure>
            <div className="card-body items-center">
                <div className='text-start'>
                <h2 className="card-title">{title}</h2>
                <p className='py-4 h-[150px]'>{description}</p>
                </div>

                <div className='flex gap-12 h-[40px]'>
                    <div className='flex gap-2'>
                    <h3 className='text-2xl'><FiDollarSign /></h3>
                    <h3>Price: {price}</h3>
                    </div>
                    <div className='flex gap-2'>
                    <h3 className='text-2xl'><HiOutlineBookOpen/></h3>
                    <h3>Credit : {credit}hr</h3>
                    </div>
                </div>

                <div onClick={()=>handleCarts(course)}
                 className="card-actions relative top-3">
                    <button className="btn btn-info w-[280px] hover:bg-white hover:text-[#2563eb]">Select</button>
                </div>
            </div>
        </div> 
        </div>
    );
};
Course.propTypes = {
    course : PropTypes.object.isRequired, 
    handleCarts :PropTypes.func,
}

export default Course;