import React ,{ Component,PropTypes } from 'react';

export default class EmployeeList extends Component{
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
           { this.props.list.map(function (item,index) {
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

EmployeeList.propTypes={
  list:PropTypes.array.isRequired
}