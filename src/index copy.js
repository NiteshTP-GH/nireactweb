import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";




class Employee extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      updatedSalary:null
    };
  }

  getUpdatedSalary=(salary)=>{
      this.setState({updatedSalary:salary});
  } 
   
  render(){
    return <div>
      <h1>Employee Details</h1>
      <p>
        <label>Employee Id : <b>{this.props.Id}</b></label>
      </p>

      <p>
        <label>Employee Name : <b>{this.props.Name}</b></label>
      </p>

      <p>
        <label>Employee Location : <b>{this.props.Location}</b></label>
      </p>

      <p>
        <label>Employee Salary : <b>{this.props.Salary}</b></label>
      </p>

      <p>
        <label>Updated Total Salary : <b>{this.state.updatedSalary}</b></label>
      </p>

      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

    </div>
  }
 }


 class Salary extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      basic:this.props.BasicSalary,
      hra:this.props.HRA,
      sa:this.props.SpecialAllowance
    };
  }
 
  updateSalary=()=>{
      let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);

      this.props.onSalaryChanged(salary);
  } 

  render() {
    return <div>
      <h1>Salary Details...</h1>
      <p>
        <label>Basic Salary : <input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
      </p>

      <p>
        <label>HRA : <input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
      </p>

      <p>
        <label>Special Allowance : <input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
      </p>

      <button onClick={this.updateSalary}>Update</button>

    </div>
  }

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

 }


 const element=<Employee Id="01" Name="Gururaj" Location="Bangalore" Salary="30,000" BasicSalary="15000" HRA="10000" SpecialAllowance="5000" ></Employee>

 ReactDOM.render(element,document.getElementById("root"));


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