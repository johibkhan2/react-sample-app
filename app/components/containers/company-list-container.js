import React from 'react';
import _ from 'lodash';
import CompanyList from '../views/company-list';
import * as companyAPI from '../../api/company-api';
import SearchForm from '../views/search-form';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const CompanyListContainer = React.createClass({

    getInitialState: function() {
        return {
            companies: []
        }
    },

    search: function(event) {
        event.preventDefault();
        let query = this.refs.child.getQuery();
        companyAPI.getCompaniesByCity(query).then(companies => {
            this.setState({companies: companies})
        });

    },


    componentDidMount: function() {
        companyAPI.getCompanies().then(companies => {
            this.setState({companies: companies})
        });
    },


    render: function() {
        const options = {
            page: 2,  // which page you want to show as default
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.state.companies.length
            } ], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            prePageTitle: 'Go to previous', // Previous page button title
            nextPageTitle: 'Go to next', // Next page button title
            firstPageTitle: 'Go to first', // First page button title
            lastPageTitle: 'Go to Last', // Last page button title
            //paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'top'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
            // hidePageListOnlyOnePage: true > Hide the page list if only one page.
        };

        function nameFormatter(data, cell) {
            return `<p>${cell[data]}</p>`;
        }

        function imageFormatter(data, cell){
            return `<img className="img-circle"  width="140" height="140" src=${cell[data]}>` ;
        }

        function nameDescFormatter(data, cell,row) {
             return `<div>  <h3><strong>${cell[data]} </strong></h3> <span class="desc" >${row['description']}</span></div>`;

        }

        function cityDateFormatter(data,cell,row) {
            return `<div className="col-sm-2 place">
                                <h3><strong>${row[data]}</strong></h3>
                                <br/>
                                <strong>Start :</strong>${row['startDate']}
                                <br/>
                                <strong>End :</strong>${row['endDate']}
                            </div>`;
        }

        return (
            <div>
            <SearchForm search={this.search} ref="child" />

                <BootstrapTable data={this.state.companies} pagination={ true } options={ options } className="companyTable">

                    <TableHeaderColumn   tdStyle={ { border: 'none' } } dataField='company'   dataFormat={ imageFormatter.bind(this, 'imageUrl') }></TableHeaderColumn>
                    <TableHeaderColumn   tdStyle={ { border: 'none' } } dataField='company'   dataFormat={ nameDescFormatter.bind(this, 'name') } ></TableHeaderColumn>
                    <TableHeaderColumn   tdStyle={ { border: 'none' } }   ></TableHeaderColumn>
                    <TableHeaderColumn   tdStyle={ { border: 'none'} }  dataField='local' isKey={ true } dataFormat={ cityDateFormatter.bind(this,'local') } ></TableHeaderColumn>

                </BootstrapTable>

            </div>
        );
    }

});

export default CompanyListContainer;
