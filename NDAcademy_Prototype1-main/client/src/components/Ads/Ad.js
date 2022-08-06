// import React from "react";
// import logo from "./logo.PNG";
// import AdCss from "./Ads.css";
// import ads1 from "./ads1.jpg";

// /*Putting the image or the video as a link so that user can directly click on the ad as
//  * a button and visit the ads website
//  * The images and ads will be stored in the database schema  */
// /*
//  * Main div is created which is divided in to three parts i.e. the image and the text area and the readmore button
// */
// const Ad = props => {
//     const divStyle = {
//       display: props.displayModal ? "block" : "none"
//     };
  
//     function closeModal(e) {
//       e.stopPropagation();
//       props.closeModal();
//     }
  
//     return (
//         <div style={divStyle} >
//             <div className="MainDiv" role="document">
           
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
//                     <span aria-hidden="true">&times;</span>
//                 </button>
  
  
//                 <div className="ImageArea">
//                     <img src = {logo} alt = "ADs" height={300} width={300}/>
//                 </div>
  
  
//                 <div className="TextArea">
//                     <div className="Message01">Your Next Step To {props.name}..<br /></div><br />
//                     <div className="Message02"> Don't Miss to sign up for COMPANY'S COURSENAME which is about DESCRIPTION only for $FEES/month!!!</div>
//                     <br /><div className="Message03">
//                         <table>

//                             <tr>
//                                 <td>Credit Type:- </td>
//                                 <td>CREDIT TYPE</td>
//                             </tr>
//                             <tr>
//                                 <td>Posted On:- </td>
//                                 <td>TIME</td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
  
//                 <div className="ButtonArea">
//                     <a href={ads1}>Book Your Slot Now</a>
//                 </div>
//             </div>
//         </div>  
//     );
// };
  
// export default Ad;
  
/*
*AUTHORS: Harsh Bansal
*PURPOSE:
*VERSION:1.0
*DATE:
*/
import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
export class Ad extends Component {
    static displayName = Ad.name;
    constructor(props) {
        super(props);
        this.state = { TestAds: [] };
    }
    //Get our information from our server at port 8080 and sets the state to our response of JSON data
    async componentDidMount() {
        await axios.get('http://localhost:8080/ads')
            .then(res => {
                this.setState({ TestAds: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.TestAds.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
    render() {
        return (
            <div>
                <div >
                    <table >
                        <thead >
                            <tr>
                                
                                <td>ID  </td>
                                <td>courseOffered       </td>
                                <td>description   </td>
                                <td>creditType      </td>
                                <td>companyOffering     </td>
                                
                                <td>datePosted      </td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}