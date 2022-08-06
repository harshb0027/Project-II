import React, { Component } from 'react';
class DataTable extends Component {
    render() {
        return (
            <tr>
               {/* {  <td>
                    {//this.props.obj._id
                    }
                </td> } */}
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.courseOffered}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.creditType}
                </td>
                <td>
                    {this.props.obj.companyOffering}
                </td>
                {/* { <td>
                    {//this.props.obj.image
                    } 
                </td> */}
                <td>
                    {this.props.obj.datePosted}
                </td>
            </tr>
        );
    }
}
export default DataTable;