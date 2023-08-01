import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
import "./filter.css"


function Filter (){
    const {careerData}  = useContext (dataContext)
    return (

        <>  
            <div className="container d-flex felx-row justify-content-center align-items-center ">
                <div className="d-flex filter">
                    <h4>Filter by location: </h4>
                    <div>
                        <select>
                            <option value=""></option>
                            <option value="nairobi">Nairobi</option>
                            <option value="mombasa">Mombasa</option>
                            <option value="kisumu">Kisumu</option>
                            <option value="nakuru">Nakuru</option>
                            <option value="eldoret">Eldoret</option>
                            <option value="machakos">Machakos</option>
                            <option value="kisii">Kisii</option>
                            <option value="nyeri">Nyeri</option>
                            <option value="embu">Embu</option>
                            <option value="kakamega">Kakamega</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;