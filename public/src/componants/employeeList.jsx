import React from 'react';

class EmployeeList extends React.Component{
   constructor(props){
     super(props);
     this.state={empList:props.list};
   }

   render(){
     return(
       <div>
         <table className="table table-bordered">
           <thead>
           <tr>
             <th>Name</th>
             <th>Gender</th>
             <th>Address</th>
           </tr>
           </thead>
           <tbody>
           { this.state.empList.map(function (item,index) {
             return <tr key={item.id}>
             <td>
             {item.email}
             </td>
             <td>
             {item.gender}
             </td>
             <td>
             {item.address}
             </td>
             </tr>
           })}
           </tbody>
         </table>
       </div>
     )
   }
}

export default EmployeeList;