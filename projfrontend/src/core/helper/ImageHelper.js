import React from 'react';
import { API } from '../../backend';


const Imagehelper = ({ product }) => {

    const imgeurl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`


    return (
        <div className="rounded border border-success p-2">
            <img
                src={imgeurl}
                alt="Phhoto"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    );
}

export default Imagehelper;
