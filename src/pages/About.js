import { Table, Tabs, Tab } from 'react-bootstrap';
import React, { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    document.title = 'About Us';
});
    // const ftStyle = {
    //     color: "#fff",
    //     backgroundColor: 'blue',
    //     padding: '10px'
    // };

    // return <h1 style={ftStyle}>Blog Articles</h1>;

    return (

        <>
        <section className="bg-light">
        <div className="container py-5">
        <div className="row">
        <div className="col-md-12 text-center">
            <h1>About</h1>
        </div>              
        </div>
        </div>            
        </section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
                </div>
            </div>
        </div>


        <div className="container py-5 bg-light">
            <div className="row">
                <div className="col-md-12">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Home">
                        1
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        2
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        3
                    </Tab>
                    </Tabs>   
                </div>
            </div>
        </div>

        </>

        
    );

  };
  
  export default About;