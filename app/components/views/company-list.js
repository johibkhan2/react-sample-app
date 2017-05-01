import React from 'react';
import { Link } from 'react-router';
import SearchFrom from './search-form';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div id="data-list">

            {props.companies.map(company => {

                return (
                    <div className="container-fluid" key={company.local}>

                        <div className="row rows" >
                            <div className="col-sm-2 image">
                                <img src={company.company.imageUrl} className="img-circle" alt="Cinque Terre" width="140" height="140"/>
                            </div>

                            <div className="col-sm-6 company">
                                <h3><strong>{company.company.name}</strong></h3>
                                {company.description}
                            </div>

                            <div className="col-sm-1 space"></div>

                            <div className="col-sm-2 place">
                                <h3><strong>{company.local}</strong></h3>
                                <br/>
                                <strong>Start :</strong>{company.startDate}
                                <br/>
                                <strong>End :</strong>{company.endDate}
                            </div>

                        </div>
                    </div>
                );
            })}

        </div>
    );
}