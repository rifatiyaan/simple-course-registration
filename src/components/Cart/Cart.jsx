import PropTypes from 'prop-types'

const Cart = ({cart}) => {
    const {title} = cart;
    return (
      <div className=''>
        <h3>{title}</h3>
      </div>  
    );
};

Cart.propTypes = {

    cart: PropTypes.object
   
}
export default Cart;