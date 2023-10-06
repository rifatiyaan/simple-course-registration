import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
Cart
const Carts = ({ carts,totalCredits,remainingCredits }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-md">
                <div className="card-body">
                    <h2 className="border-b-2 font-bold text-xl text-[#2F80ED] pb-4">Credit Hour Remaining {remainingCredits} hr</h2>
                    <h2 className="card-title mb-4 font-bold">Course Name</h2>
                    <div className="border-b-2">
                        <div className="font-thin text-lg mb-2">
                            <ol>
                                {carts.map((cart, index) => (
                                    <li className="flex" key={index}>
                                        {`${(index+1)}.`}<Cart key={index} cart={cart}></Cart></li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="border-b-2 text-lg font-medium pb-4">
                        Total Credit Hour : {totalCredits}
                    </div>
                </div>
            </div>
        </div>

    );
};
Carts.propTypes = {
    carts: PropTypes.array,
    totalCredits: PropTypes.number,
    remainingCredits: PropTypes.number 
    
}

export default Carts;