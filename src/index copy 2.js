import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));



// import React, { useState, Component } from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter, Link, NavLink, Switch, Route, Redirect, Prompt} from 'react-router-dom';

// const authentication={
//   isLoggedIn:false,
//   onAuthentication(){
//     this.isLoggedIn=true;
//   },
//   getLogInStatus(){
//     return this.isLoggedIn;
//   }
// }
// function SecuredRoute(props){
//   return(
//     <Route path={props.path} render={data=>authentication.getLogInStatus()?(
//       <props.component {...data}></props.component>):
//       (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
//   )
// }
// function LogIn(props){
//   const [loginData,setLoginData]=useState({username:'',password:''});

//   function changeLogInData(e){
//     setLoginData({...loginData,[e.target.name]:e.target.value});
//   }

//   function onLogIn(){
//     fetch("https://localhost:44306/api/Test",{
//       method:'POST',
//       headers:{'Content-type':'application/json'},
//       body:JSON.stringify(loginData)
//     }).then(r=>r.json()).then(result=>{
//       if(result){
//         authentication.onAuthentication();
//         props.history.push('/home');
//       }
//       else{
//         alert('Invalid UserName or PassWord');
//       }
//     });
//   }

//   return(
//     <div>
//       <h2>Welcome to LogIn...</h2>
//       <p>
//         <label>UserName : <input type="text" value={loginData.username} 
//                           name="username" onChange={changeLogInData}></input></label>
//       </p>
//       <p>
//         <label>PassWord : <input type="text" value={loginData.password} 
//                           name="password" onChange={changeLogInData}></input></label>
//       </p>
//       <button onClick={onLogIn}>LogIn</button>
//     </div>
//   )
// }

// function Home(props){
//   function onNext(){
//     props.history.replace('/editprofile');
//   }
//   return(
//     <div>
//       <h2>Welcome to Home...</h2>  
//       <button onClick={onNext}>Next</button>    
//     </div>
//   );
// }
// function EditProfile(){

//   let [isDataChanged,setDataChanged]=useState(false);
  
//   let [userInfo,setUserInfo]=useState({firstName:'Pragim',
//                                       lastName:'Technologies',
//                                       userName:'Pragim Tech', 
//                                       emailId:'Pragim@gmail.com',
//                                       contactNo:'+91-9945699393'});

  
//   function saveChanges(){
//     setDataChanged(false);
//   }

//   function onUserDataChange(e){
//     setUserInfo({...userInfo,[e.target.name]:e.target.value});
//     setDataChanged(true);
//   }

//   return(
//     <div>
//       <Prompt when={isDataChanged} 
//               message={()=>"There are Some Unsaved Changes. Do you want to go Away?"}></Prompt>
//       <h2>Welcome to Edit Profile...</h2>
//       <p>
//         <label>First Name : <input type="text" name="firstName" 
//         onChange={onUserDataChange}
//          value={userInfo.firstName}></input></label>
//       </p>
//       <p>
//         <label>Last Name : <input type="text" name="lastName" 
//         onChange={onUserDataChange} value={userInfo.lastName}></input></label>
//       </p>
//       <p>
//         <label>User Name : <input type="text" name="userName" 
//         onChange={onUserDataChange}
//          value={userInfo.userName}></input></label>
//       </p>
//       <p>
//         <label>Email ID : <input type="text" name="emailId" 
//         onChange={onUserDataChange}
//          value={userInfo.emailId}></input></label>
//       </p>
//       <p>
//         <label>Contact Number : <input type="text" name="contactNo" 
//         onChange={onUserDataChange}
//          value={userInfo.contactNo}></input></label>
//       </p>
//       <button onClick={saveChanges}>Save</button>
//     </div>
//   );
// }



// function App(){
//   return(
//     <div>
//       <h2>Welcome to App Component...</h2>
//       <Link to="/">LogIn</Link>&nbsp;&nbsp;
//       <NavLink to="/home" activeClassName="testClass">Home</NavLink>&nbsp;&nbsp;
//       <NavLink to="/editprofile" activeClassName="testClass">Edit Profile</NavLink>
      
//       <Switch>
//         <Route exact path="/" component={LogIn}></Route>
//         <SecuredRoute  path="/home" component={Home}></SecuredRoute>
//         <SecuredRoute  path="/editprofile" component={EditProfile}></SecuredRoute>
//       </Switch>
      
//     </div>
//   )
// }

// ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,
//   document.getElementById("root"));
  
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter, Link, NavLink, Switch, Outlet, Routes, Route} from 'react-router-dom';
// import Employee from './employee';
// import Department from './department';
// import Project from './project';

// function App(){
//   return(
//     <div>
//       <h2>Welcome to App Component...</h2>
//       <ul>
//         <li><Link to="/">Employees</Link></li>
//         <li><NavLink to="/departments" activeClassName="testClass">Departments</NavLink></li>
//         <li><NavLink to="/projects" activeClassName="testClass">Projects</NavLink></li>
//  </ul>
// <Outlet>
//         <Route exact path="/" component={Employee}></Route>
//         <Route path="/departments" component={Department}></Route>
//         <Route path="/projects" component={Project}></Route>
//       </Outlet>

//     </div>
//   )
// }

// ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"));

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import {useSpeechRecognition} from 'react-speech-kit'

// function App(){
//   const [text,setText]=useState();

//   const {listen,stop}=useSpeechRecognition({
//     onResult:result=>setText(result)
//   });

//   return(
//     <div>
//       <h2>Converting the Speech to Text...</h2>
//       <textarea value={text}></textarea>
//       <p>
//         <button onClick={listen}>Listen</button>
//         <button onClick={stop}>Stop</button>
//       </p>
//     </div>
//   )
// }

// const element=<App></App>

// ReactDOM.render(element,document.getElementById("root"));



// class Employee extends React.Component {

//   constructor(props){

//     super(props);

//     this.state={

//       Name:''

//     }

//   }

//   changeName=(e)=>{

//     this.setState({Name:e.target.value});

//   }

//   render(){

//     return(

//       <div>

//         <h2>Welcome to Employee Component...</h2>

//         <p>

//           <label>Employee Name : 

//                   <input type="text" value={this.state.Name} onChange={this.changeName}></input>

//           </label>

//         </p>

// <p>

//           Entered Name is : <b>{this.state.Name}</b>

//         </p>

//       </div>

//     )

//   }

// }


// const element=<Employee></Employee>

// ReactDOM.render(element,document.getElementById("root"));



// class ChangeDetection extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       employeeCount:0
//     }; 

//     setInterval(this.getEmployeesCount, 5000);        
//   }

//   componentWillUnmount(){
//     clearInterval()
//   }
//   getEmployeesCount=()=>{
//     alert('Fetching the Employee Count from the REST API');
//     fetch("https://localhost:44306/api/Employee")
//       .then(res => res.json())
//       .then(
//         (result) => {          
//           this.setState({
//             employeeCount: result.length
//           });
//         }
//       );
//   }

//   componentDidMount(){
//     this.getEmployeesCount();
//   }

//   showReports=()=>{
//     ReactDOM.render(<Reports></Reports>,document.getElementById("root"));
//   }
//   render() {
//     return (
//       <div>
//         <h2>Welcome to Component Lifecycle Methods Demonstration...</h2>
//         <p>
//           <label>Number of Employees are : <b>{this.state.employeeCount}</b></label>
//         </p>
//         <button onClick={this.showReports}>Show Reports</button>
//         </div>
//       );
//     }
// }

// class Reports extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees:[]
//     };
//   } 

//    componentDidMount=() => {
//       this.getEmployees();
    
//   }

//    getEmployees() {
//     fetch("https://localhost:44306/api/Employee")
//       .then(res => res.json())
//       .then(
//         (result) => {          
//           this.setState({
//             employees: result
//           });
//         }
//       );
//   }

//   loadEmployees=()=>{
//     this.getEmployees();
//   }
//   render() {
//     return (
//       <div>
//         <h2>Employees Data...</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//           {this.state.employees.map(emp => (
//             <tr key={emp.Id}>
//               <td>{emp.Id}</td>
//               <td>{emp.Name}</td>
//               <td>{emp.Location}</td>
//               <td>{emp.Salary}</td>
//               </tr>
//           ))}
//           </tbody>
//         </table>
//         <p>
//           <button onClick={this.loadEmployees}>Reload</button>
//         </p>
//         </div>
//       );
//     }
// }

// const element=<ChangeDetection></ChangeDetection>

// ReactDOM.render(element,document.getElementById("root"));


// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     // this.setState({Id:101});
//     this.state={
//       Name:''
//     }
//   }


//   changeName=(e)=>{
//     this.setState({Name:e.target.value});
//   }

//   render(){
//     return(
//       <div>
//         <h2>Welcome to Employee Component...</h2>
//         <p> 
//           <label>Employee Name : <input type="text" value={this.state.Name} onChange={this.changeName}></input></label>
//         </p>
//       </div>
//     )
//   }
// }


// const element=<Employee></Employee>

// ReactDOM.render(element,document.getElementById("root"));








// const DemoComponent=React.forwardRef((props,ref)=>{
//   function testClick(){
//     ref.current.focus();
//   }
//   return(
//     <button onClick={testClick}>Click</button>
//   )
// });

// class Elevator extends React.Component{
//   constructor(props){
//     super(props);
//     this.elevatorRef=React.createRef();
//   }

//   render(){
//     return(
//           <div>
//             <h2>Welcome to Elevator Ordering Screen</h2>
//             <p>
//               <label>Elevator Name : <input ref={this.elevatorRef} type="text"></input></label>
//             </p> 

//             <p>
//               <label>Elevator Speed : <input type="text"></input></label>
//             </p>           

//             <p>
//               <label>Elevator Load : <input type="text"></input></label>
//             </p>
//             <Summary innerRef={this.elevatorRef}></Summary>
//             <DemoComponent ref={this.elevatorRef}></DemoComponent>
//           </div>
//     );
//   }
// }

// class Summary extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   focusInput=()=>{
//     this.props.innerRef.current.focus();
//   }

//   render(){
//     return(
//       <div>
//         <h2>Summary Details...</h2>
//         <p onClick={this.focusInput}>
//           <label>Elevator Name : <b>Name - 1</b></label>
//         </p>

//         <p>
//           <label>Elevator Speed : <b>10 m/s</b></label> 
//         </p>

//         <p>
//           <label>Elevator Load : <b>550 Kg</b></label>
//         </p>
//       </div>
//     );
//   }
// }


// function testComponent(){
//   let testRef=null;
//   function handleClick() {
//     testRef.focus();
//   }

//   return(
//     <div>
//       <input type="text" ref={e=>testRef=e} />
//       <input type="button" value="Focus the text input" onClick={handleClick} />
//     </div>
//   );
// }


// const element=<Elevator></Elevator>
// ReactDOM.render(element,document.getElementById("root"));




// class QuantityIncrement extends React.Component {
//   constructor(props){
//     super(props);
//     // this.state={quantity:0};
//     this.quantityRef=React.createRef();
//   }

//   incrementQuantity=()=>{
//     // this.setState({quantity:this.state.quantity+1}); 
//     this.quantityRef.current.value++;
//   }

//   render(){
//     alert('Text Message');
//     return(
//       <div>
//         <p>
//           <label>Enter Quantity : <input type="text" ref={this.quantityRef}></input>
//           <button onClick={this.incrementQuantity}>+</button>
//           </label>
//         </p>
//       </div>
//     )
//   }
  
// }   



// class LogIn extends React.Component{
//   constructor(props){
//     super(props);
//     this.userNameRef=React.createRef();
//   }

//   componentDidMount(){
//     this.userNameRef.current.focus();
//   }

//   render(){
//     return(
//       <div>
//       <h2>LogIn Screen</h2>
//       <p>
//         <label>UserName : <input type="text" ref={this.userNameRef}></input></label>
//       </p>
//       <p>
//         <label>PassWord : <input type="text"></input></label>
//       </p>

//       <button>LogIn</button>
//       </div>
//     )
//   }
// }


// class VideoPlayer extends React.Component{
//   constructor(props){
//     super(props); 
//     this.videoRef=React.createRef();
//   }

//   playVideo=()=>{
//     this.videoRef.current.play();
//   }

//   pauseVideo=()=>{
//     this.videoRef.current.pause();
//   }

//   render(){
//     return(
//       <div>
//         <video ref={this.videoRef} width="300" height="200" controls>
//           <source src={video} type="video/mp4"></source>
//         </video>
//         <div>
//           <button onClick={this.playVideo}>Play</button>
//           <button onClick={this.pauseVideo}>Pause</button>
//         </div>
//       </div>
//     )
//   }
// }

// const element=<VideoPlayer></VideoPlayer>
// ReactDOM.render(element,document.getElementById("root"));










// class CustomErrorBoundary extends React.Component{
//   constructor(props){
//   super(props);
//   this.state={hasError:null};  
//   }

//   static getDerivedStateFormError(error){
//     return {hasError:true};
//   }

//   componentDidCatch(error,errorInfo){
//     console.log(error);
//     console.log(errorInfo);
//   }

//   render(){
//     if(this.state.hasError){
//       return(
//         <React.Fragment>
//         <div>
//           <h2>We are having Problems to Load your Preferrences now.</h2>
//         </div>
//         <div>
//         <h2>We are having Problems to Load your Preferrences now.</h2>
//       </div>             
//         </React.Fragment>
     
//       );
//     }
//     else{
//       return this.props.children;
//     }
//   }


// }
// class OrderComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={quantity:'',address:''};
//   }

//   orderInfoChanged=val=>{
//     this.setState({quantity:val});
//   }

//   addressChanged=val=>{
//     this.setState({address:val});
//   }

//   render(){
//     return(
//       <>
//         <h1>Product Order Screen...</h1>


//         <ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>

//         <AddressComponent address={this.state.address} onAddressChange={this.addressChanged}></AddressComponent>
//         <SummaryComponent quantity={this.state.quantity} address={this.state.address} onQuantityChange={this.orderInfoChanged}></SummaryComponent>
//       </>
//     );

//   }

// }


// class ProductInformationComponent extends React.Component{
//   constructor(props){
//     super(props);
    
//   }

//   handleChange=e=>{
//     this.props.onQuantityChange(e.target.value);
//   };

//   render(){
//     return (
//       <div style={{border:'3px solid red'}}>
//         <h2>Product Informatiom...</h2>
//         <p>
//           <label>Product Name :
//             <select>
//               <option value="Product-1">Product-1</option>
//               <option value="Product-2">Product-2</option>
//               <option value="Product-3">Product-3</option>
//             </select>
//           </label>
//         </p>

//         <p>
//           <label>Enter Quantity : <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
//         </p>
//       </div>
//     )

//   }
  
// }


// class AddressComponent extends React.Component{
//   constructor(props){
//     super(props);
    
//   }

//   handleChange=e=>{
//     this.props.onAddressChange(e.target.value);
//   };

//   render(){
//     return (
//       <div style={{border:'3px solid red'}}>
//         <h2>Address Informaton...</h2>
//         <p>
//           <label>Address : <textarea value={this.props.address} onChange={this.handleChange}></textarea></label>
//         </p>
//         <CustomErrorBoundary>
//           <UserPreferredAddressList></UserPreferredAddressList>
//         </CustomErrorBoundary>
//       </div>
//     )

//   }
  
// }


// class UserPreferredAddressList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render(){
//     return(
//       <div>
//         <h2>Your Existing Addresses...</h2>
//         <p>
//           Office<br></br>
//           Marathalli, Bangalore-560037
//         </p>
//       </div>
//     );
//   }
// }

// class SummaryComponent extends React.Component{
//   constructor(props){
//     super(props);
    
//   }

//   render(){

//     return (
//       <div style={{border:'3px solid red'}}>
//         <h2>Summary Information...</h2>

//         <p>
//           <label>Product Name : <b>Product - 1</b></label>
//         </p>
//         <p>
//           <label>Enter Quantity : <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
//         </p>

//         <p>
//           <label>Address <b>{this.props.address}</b></label>
//         </p>
//         <button>Place order</button>
//       </div>
//     )

//   }
  
// }


// const element=<OrderComponent></OrderComponent>

// ReactDOM.render(element,document.getElementById("root"));










// const validateEmployee=empData=>{
//   const errors={};

//   if(!empData.Name){
//     errors.Name='Please Enter Employee Name';
//   }

//   else if(empData.Name.length>20){
//     errors.Name='Employee Name should not exceed 20 characters'
//   }

//   if(!empData.Location){
//     errors.Location='Please Enter Employee Location';
//   }


//   if(!empData.EmailId) {
//     errors.EmailId = "Please Enter Email Id"
//   } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
//     errors.EmailId='Invalid email address';
//   }

//   return errors;

// }

// const EmployeeComponent=()=>{
  // const formik=useFormik({
  //   initialValues:{
  //     Id:'',
  //     Name:'',
  //     Location:'',
  //     Salary:'',
  //     EmailId:''
  //   },
  //   // validate:validateEmployee,

  //   validationSchema:yup.object({
  //     Name:yup.string().max(20,'Name should not exceed 20 Characters').
  //     required('Please Enter Employee Name'),

  //     Location:yup.string()
  //     .required('Please Enter Employee Location'),

  //     EmailId:yup.string()
  //     .email('Invalid Email address')
  //     .required('Please Enter Email Id'),

  //   }),
  //   onSubmit:values=>{
  //     alert(JSON.stringify(values));
  //   }
  // });

  // return (

  //   <Formik initialValues={{
  //     Id:'',
  //     Name:'',
  //     Location:'',
  //     Salary:'',
  //     EmailId:'',
  //     Designation:''
  //   }} validationSchema={yup.object({
  //     Name:yup.string().max(20,'Name should not exceed 20 Characters').
  //     required('Please Enter Employee Name'),

  //     Location:yup.string()
  //     .required('Please Enter Employee Location'),

  //     EmailId:yup.string()
  //     .email('Invalid Email address')
  //     .required('Please Enter Email Id'),

  //   })} onSubmit={values=>{
  //     alert(JSON.stringify(values));
  //   }}>
  //     {
  //       props=>(
  //         <div>
  //         <h2>New Employee Form...</h2>
  //         <Form>
  
  //           <p>
  //             <label>Employee ID</label>
  //             <Field name="Id" type="text"></Field>
  //           </p>
  
  //           <p>
  //             <label>Employee Name</label>
  //             <Field name="Name" type="text"></Field>
  //             <ErrorMessage name="Name"></ErrorMessage>
  //           </p>
  
  //           <p>
  //             <label>Employee Location</label>
  //             <Field name="Location" type="text"></Field>
  //             <ErrorMessage name="Location"></ErrorMessage>
  //           </p>
  
  //           <p>
  //             <label>Employee Salary</label>
  //             <Field name="Salary" type="text"></Field>
  //             <ErrorMessage name="Salary"></ErrorMessage>
  //           </p>
  
  //           <p>
  //             <label>Employee Email Id</label>
  //             <Field name="EmailId" type="email"></Field>
  //             <ErrorMessage name="EmailId"></ErrorMessage>
  //           </p>
  
  //           <p>
  //             <label>Employee Designation</label>
  //             <Field name="Designation" as="select">
  //             <option value="SoftwareEngineer">Software Engineer</option>
  //             <option value="SeniorSoftwareEngineer">Senior Software Engineer</option>
  //             <option value="Lead">Lead</option>
  //             </Field>
  
  //           </p>          
  
  //           <button type='submit' disabled={!props.isValid}>Create</button>
  
  //         </Form> 
  //       </div>
  //       )
  //     }

  //   </Formik>

    // <div>
    //   <h2>new Employee Form...</h2>
    //   <form onSubmit={formik.handleSubmit}>
    //     <p>
    //       <label htmlFor='Id'>Employee ID : </label>
    //       <input name='Id' {...formik.getFieldProps('Id')}></input>
    //     </p>

    //     <p>
    //       <label htmlFor='Name'>Employee Name : </label>
    //       <input name='Name' {...formik.getFieldProps('Name')}></input>
    //       {formik.touched.Name && formik.errors.Name ? 
    //      <span style={{color:'red'}}>{formik.errors.Name}</span> :null}

    //     </p>


    //     <p>
    //       <label htmlFor='Location'>Employee Location : </label>
    //       <input name='Location' {...formik.getFieldProps('Location')}></input>
    //       {formik.touched.Location && formik.errors.Location ? 
    //       <span style={{color:'red'}}>{formik.errors.Location}</span> :null}
    //     </p>

    //     <p>
    //       <label htmlFor='Salary'>Employee Salary : </label>
    //       <input name='Salary' {...formik.getFieldProps('Salary')}></input>
    //     </p> 

    //     <p>
    //       <label htmlFor='EmailId'>Employee Email Id : </label>
    //       <input name='EmailId' {...formik.getFieldProps('EmailId')}></input>
    //       {formik.touched.EmailId && formik.errors.EmailId ? 
    //       <span style={{color:'red'}}>{formik.errors.EmailId}</span> :null}
    //     </p> 


                        
    //   <button type='submit'>Create</button>
    //   </form>
    // </div>


    // <div>
    //   <h2>new Employee Form...</h2>
    //   <form onSubmit={formik.handleSubmit}>
    //     <p>
    //       <label htmlFor='Id'>Employee ID : </label>
    //       <input type='text' name='Id' id='Id' value={formik.values.Id} onChange={formik.handleChange}></input>
    //     </p>


    //     <p>
    //       <label htmlFor='Name'>Employee Name : </label>
    //       <input type='text' name='Name' id='Name' value={formik.values.Name} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
    //       {formik.touched.Name && formik.errors.Name ? 
    //                   <span style={{color:'red'}}>{formik.errors.Name}</span> :null}

    //     </p>


    //     <p>
    //       <label htmlFor='Location'>Employee Location : </label>
    //       <input type='text' name='Location' id='Location' value={formik.values.Location} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
    //       {formik.touched.Location && formik.errors.Location ? 
    //                   <span style={{color:'red'}}>{formik.errors.Location}</span> :null}

    //     </p>

    //     <p>
    //       <label htmlFor='Salary'>Employee Salary : </label>
    //       <input type='text' name='Salary' id='Salary' value={formik.values.Salary} onChange={formik.handleChange}></input>
    //     </p> 

    //     <p>
    //       <label htmlFor='EmailId'>Employee Email Id : </label>
    //       <input type='text' name='EmailId' id='EmailId' value={formik.values.EmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
    //       {formik.touched.EmailId && formik.errors.EmailId ? 
    //                   <span style={{color:'red'}}>{formik.errors.EmailId}</span> :null}
    //     </p> 


                        
    //   <button type='submit'>Create</button>
    //   </form>
    // </div>

//   )
// }

// const element=<EmployeeComponent></EmployeeComponent>

// ReactDOM.render(element,document.getElementById("root"));
















// class EmployeeComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       employee:{
//         Id:'',
//         Name:'',
//         Location:'',
//         Salary:''
//       }
//     };
//   }

//   changeHandler=e=>{
//     const name=e.target.name;
//     const value=e.target.value;

//     this.setState({employee:{
//       ...this.state.employee,
//       [name]:value
//     }});
//   }

//   onCreateEmployee=()=>{
//     console.log(this.state.employee);
//   }

//   render(){
//     return (
//       <div>
//         <h2>New Employee Form...</h2>
//         <form>

//           <p>
//             <label>Employee ID : <input type="text" name="Id" value={this.state.employee.Id} onChange={this.changeHandler}></input></label>
//           </p>

//           <p>
//             <label>Employee Name : <input type="text" name="Name" value={this.state.employee.Name} onChange={this.changeHandler}></input></label>
//           </p>

//           <p>
//             <label>Employee Location : <input type="text" name="Location" value={this.state.employee.Location} onChange={this.changeHandler}></input></label>
//           </p>

//           <p>
//             <label>Employee Salary : <input type="text" name="Salary" value={this.state.employee.Salary} onChange={this.changeHandler}></input></label>
//           </p>




//         </form>

//         <button onClick={this.onCreateEmployee}>Create</button>
//       </div>
//     )
//   }
// }

// const element=<EmployeeComponent></EmployeeComponent>

// ReactDOM.render(element,document.getElementById("root"));
// function Employee(props){
//   return <div style={{border:"2px solid red"}}>

//     <p>
//       <label>Employee Id : <b>{props.data.Id}</b></label>
//     </p>

//     <p>
//       <label>Employee Name : <b>{props.data.Name}</b></label>
//     </p>

//     <p>
//       <label>Employee Location : <b>{props.data.Location}</b></label>
//     </p>

//    <p>
//       <label>Employee Salary : <b>{props.data.Salary}</b></label>
//     </p>


//   </div>
// }

// function DisplayEmployees(props){
//   const empList=props.employeeList;
//   const listElements=empList.map((emp)=>
//     <Employee key={emp.Id} data={emp}></Employee>
//   );

//   return(
//     <div>
//       {listElements}
//     </div>
//   );
// }

// const employees = [
//   {Id:101,Name:"ABC",Location:"Bangalore",Salary:10000},
//   {Id:102,Name:"DEF",Location:"Pune",Salary:12000},
//   {Id:103,Name:"XYZ",Location:"Mumbai",Salary:15000}
// ];

// const element=<DisplayEmployees employeeList={employees}></DisplayEmployees>

// ReactDOM.render(element,document.getElementById("root"));

// const EmployeeContext=React.createContext({
//   data:'',
//   changeEmployeeInfo:()=>{}
// });

// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       data: {
//       Id:101,
//       Name:"Gururaj",
//       Location:"Bangalore",
//       Salary:15000
//     },
//     changeEmployeeInfo: this.updateEmployeeDetails
//   };

//   }

//   updateEmployeeDetails=()=>{
//     this.setState({data:{Id:102}});
//   };
      
//   render() { 
//     return <div>
//       <h1>Welcome to App Component</h1>
//       <p>
//         <label>Employee ID: <b>{this.state.data.Id}</b></label>
//       </p>
//       <EmployeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </EmployeeContext.Provider>

//     </div>
//   }
// }


// class Employee extends React.Component {
//   static context=EmployeeContext;

//   render() {
//     return <div>
//       <h1>Welcome to Employee Component</h1>
//       <p>
//         <label>Employee ID : <b>{this.context.data.Id}</b></label>
//       </p>

//       <button onClick={this.context.changeEmployeeInfo}>Update</button>
//     </div>
//   }
// }


// const element=<App></App>

// ReactDOM.render(element,document.getElementById("root"));




// const EmployeeContext=React.createContext();

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       Id:101,
//       Name:"Gururaj",
//       Location:"Bangalore",
//       Salary:15000
//     };
//   }

//     ChangeEmployeeData=()=>{
//       this.setState({Id:102});
//     }
//   render() {
//     return <div>
//       <h1>Welcome to App Component</h1>
//       <p>
//         <label>Employee ID: <b>{this.state.Id}</b></label>
//       </p>
//       <EmployeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </EmployeeContext.Provider>

//       <p>
//         <button onClick={this.ChangeEmployeeData}>Update</button>
//       </p>
//     </div>
//   }
// }


// class Employee extends React.Component {
//   static context=EmployeeContext;

//   render() {
//     return <div>
//       <h1>Welcome to Employee Component</h1>
//       <p>
//         <label>Employee Id : <b>{this.context.Id}</b></label>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }


// class Salary extends React.Component {
//   static context=EmployeeContext;

//   render() {
//     return <div>
//       <h1>Welcome to Salary Component</h1>
//       <p>
//         <label>Employee Id : <b>{this.context.Id}</b></label>
//       </p>      
//     </div>
//   }
// }


// const element=<App></App>

// ReactDOM.render(element,document.getElementById("root"));













// class Employee extends React.Component{
//   constructor(props){
//     super(props); 
//     this.state={
//       updatedSalary:null
//     };
//   }

//   getUpdatedSalary=(salary)=>{
//       this.setState({updatedSalary:salary});
//   } 
   
//   render(){
//     return <div>
//       <h1>Employee Details</h1>
//       <p>
//         <label>Employee Id : <b>{this.props.Id}</b></label>
//       </p>

//       <p>
//         <label>Employee Name : <b>{this.props.Name}</b></label>
//       </p>

//       <p>
//         <label>Employee Location : <b>{this.props.Location}</b></label>
//       </p>

//       <p>
//         <label>Employee Salary : <b>{this.props.Salary}</b></label>
//       </p>

//       <p>
//         <label>Updated Total Salary : <b>{this.state.updatedSalary}</b></label>
//       </p>

//       <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

//     </div>
//   }
//  }


//  class Salary extends React.Component{
//   constructor(props){
//     super(props); 
//     this.state={
//       basic:this.props.BasicSalary,
//       hra:this.props.HRA,
//       sa:this.props.SpecialAllowance
//     };
//   }
 
//   updateSalary=()=>{
//       let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);

//       this.props.onSalaryChanged(salary);
//   } 

//   render() {
//     return <div>
//       <h1>Salary Details...</h1>
//       <p>
//         <label>Basic Salary : <input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
//       </p>

//       <p>
//         <label>HRA : <input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
//       </p>

//       <p>
//         <label>Special Allowance : <input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
//       </p>

//       <button onClick={this.updateSalary}>Update</button>

//     </div>
//   }

  // render(){
  //   return <div>
  //     <h1>Salary Details...</h1>
  //     <p>
  //       <label>Basic Salary : <b>{this.props.BasicSalary}</b></label>
  //     </p>

  //     <p>
  //       <label>HRA : <b>{this.props.HRA}</b></label>
  //     </p>

  //     <p>
  //       <label>Special Allowance : <b>{this.props.SpecialAllowance}</b></label>
  //     </p>


  //   </div>
  // }

//  }


//  const element=<Employee Id="01" Name="Gururaj" Location="Bangalore" Salary="30,000" BasicSalary="15000" HRA="10000" SpecialAllowance="5000" ></Employee>

//  ReactDOM.render(element,document.getElementById("root"));


// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message: ''
//     };

//   }

//   onMessageChange(text){
//     this.setState({
//       message:'Message has' +text.length+ 'number of characters'
//     });
//   }

//   render(){
//     return <div>
//       <h2>Welcome to count characters component...</h2>
//       <p>
//         <label>Enter Message : <input type="text" 
//                                     onChange={e=>this.onMessageChange(e.target.value)}></input></label>
//       </p>

//       <p>
//         <label>{this.state.message}</label>
//       </p>

//       <p>
//         <label>{this.state.counter}</label>
//       </p>
//     </div>
//   }

// }

// class Employee extends React.Component{
//   state={counter:0};
//   addEmployee=()=>{
//     this.counter=this.counter+1;
//     this.setState({counter:this.state.counter+1});
//     // alert("Adding a new Employee");
//     // alert("Add Employee button is Clicked" + this.counter + 'times ');
//   }
//   render(){
//     return <div>
//       <h1>Welcome to employee Component...</h1>

//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>

//       <p>
//         <label>Add Employee Button is Clicked: <b>{this.state.counter}</b> times</label>
//       </p>

//     </div>
//   }
// }


// const element=<CountCharacters></CountCharacters>
// ReactDOM.render(element,document.getElementById("root"));







// class Employee extends React.Component{
//   constructor(props){
//     super(props); 
//     console.log(this.props);
//   }
//   render(){
//     return <div>
//       <h1>Employee Details</h1>
//       <p>
//         <label>Employee Id : <b>{this.props.Id}</b></label>
//       </p>

//       <p>
//         <label>Employee Name : <b>{this.props.Name}</b></label>
//       </p>

//       <p>
//         <label>Employee Location : <b>{this.props.Location}</b></label>
//       </p>

//       <p>
//         <label>Employee Salary : <b>{this.props.Salary}</b></label>
//       </p>

//       <Department DeptName={this.props.DeptName} HeadName={this.props.HeadName}></Department>

//     </div>
//   }
// }



// class Department extends React.Component{
//   render(){
//     return <div>
//       <h1>Department Details</h1>
      
//       <p>
//         <label>Department Name : <b>{this.props.DeptName}</b></label>
//       </p>

//       <p>
//         <label>Head Name : <b>{this.props.HeadName}</b></label>
//       </p>
//     </div>
//   }
// }

// const element=<Employee Id="01" Name="Gururaj" Location="Bangalore" Salary="30,000" DeptName="Computer Science" HeadName="ABC"></Employee>

// ReactDOM.render(element,document.getElementById("root"));

// function DisplayEmployeeInfo(employee){
// var DisplayEmployeeInfo=(employee)=>{
//   return <div>
//     <h1>Employee Details</h1>
//     <p>
//       <label>Employee Id <b>{employee.Id}</b></label>
//     </p>

//     <p>
//       <label>Employee Name <b>{employee.Name}</b></label>
//     </p>

//     <p>
//       <label>Employee Location <b>{employee.Location}</b></label>
//     </p>

//     <p>
//       <label>Employee salary <b>{employee.Salary}</b></label>
//     </p>

//     <Department deptName={employee.deptName} headName={employee.headName}></Department>

//   </div>;
// }

// const Department=(deptInfo)=>{
//   return <div>
//     <p>Department Name is : <b>{deptInfo.deptName}</b></p>
//     <p>Department Head is : <b>{deptInfo.headName}</b></p>
//   </div>
// }
// const element=<DisplayEmployeeInfo Id="01" Name="Gururaj" Location="Bangalore" Salary="30,000" deptName="Computer Science" headName="ABC"></DisplayEmployeeInfo>

// ReactDOM.render(element,document.getElementById("root")); 

// const element=<h1 className='text-style'>Jain (Deemed-to-be University)</h1>

// ReactDOM.render(element,document.getElementById("root"));





// const newelement=<h1 className='text-style'>Jain University</h1>

// ReactDOM.render(newelement,document.getElementById("app"));



// const element=(
//    <div className='text-style'>
//      <h1>Jain (Deemed-to-be University)</h1>
//      <h1>Jain University</h1>
//    </div>
// );

// ReactDOM.render(element,document.getElementById("root"));




// const element=React.createElement("h1",null,"Jain (Deemed-to-be University");

// ReactDOM.render(element,document.getElementById("root"));



// const element=React.createElement("div",{className:"text-style"},
// React.createElement("h1",null,"Jain University"),
// React.createElement("h2",null,"Jain (Deemed-to-be University)")
// ); 

// ReactDOM.render(element,document.getElementById("root"));