import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

const JobTable = (props) => {
  {
    props.filteredJobs.map((e) => {
      return (
        <Table>
          <container style={{ marginLeft: '10px' }}>
            <thead>
              <tr>
                <tr>
                  <div>
                    <td>
                      <h2>
                        <b>{e.company}</b>
                      </h2>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div>
                    <img
                      style={{ width: '35px' }}
                      alt={'companyLogo'}
                      src={e.company_logo}
                    ></img>
                  </div>
                </tr>

                <tr>
                  <div>
                    <td>
                      <h4>{e.location}</h4>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div>
                    <th style={{ fontWeight: 'bold' }}>Job Title:</th>
                  </div>
                  <div>
                    <td>{e.title}</td>
                  </div>
                </tr>

                <tr>
                  <div>
                    <th style={{ fontWeight: 'bold' }}>Description:</th>
                  </div>
                  <div>
                    <td> {Parser(e.description)}</td>
                  </div>
                </tr>

                <tr>
                  <div>
                    <th style={{ fontWeight: 'bold' }}>How To Apply:</th>
                  </div>
                  <div>
                    <td>{Parser(e.how_to_apply)}</td>
                  </div>
                </tr>

                <tr>
                  <div>
                    <th style={{ fontWeight: 'bold' }}>Posted Date:</th>
                  </div>
                  <div>
                    <td>{e.created_at}</td>
                  </div>
                </tr>
              </tr>
            </thead>
            <hr />
          </container>
        </Table>
      );
    });
  }
};

JobTable.propTypes = {
    filteredJobs: PropTypes.object.isRequired,
};

export default JobTable;
