import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/searchBar';
import JobTable from '../../components/jobTable/jobTable';

const JobListingPage = () => {
  // Declare a new state variable to set all employees
  const [jobData, setJobData] = useState([]);

  // Declare a new state to filter
  const [filterText, setFilterText] = useState('');
  const filteredJobs = jobData.filter((e) => {
    // By company
    if (e.company.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By location
    else if (e.location.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By title
    else if (e.title.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By description
    else if (e.description.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get('/api/jobs')
      .then(function (response) {
        // handle success
        setJobData(response.data.data);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <h1 style={{ textAlign: 'center' }}>
        Your Next Opportunity Awaits...
        <hr />
      </h1>
      <SearchBar setFilterText={setFilterText} />
      <JobTable jobData={filteredJobs} />;
      <Footer />
    </div>
  );
};


export default JobListingPage;
