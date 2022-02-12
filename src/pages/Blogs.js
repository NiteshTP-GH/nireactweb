import { Row, Col, Nav, Tab } from 'react-bootstrap';

import React, { useEffect } from 'react';
const Blogs = () => {

useEffect(() => {
    document.title = 'Blog';
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
            <h1>Blog</h1>
        </div>              
        </div>
        </div>            
        </section>  

        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          1
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>                
                </div>
            </div>
        </div>

        </>

        
    );

  };
  
  export default Blogs;