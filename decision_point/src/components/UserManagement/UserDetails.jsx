import React, { Component } from "react";
import MaterialTable from "material-table";
import { tableColumn } from "./userDetailsTableColumn";
import { Grid, Typography } from "@material-ui/core";
import axios from 'axios';
import {Link} from "react-router-dom";
import ViewUserDetails from "./Modal//ViewUserDetails"
import D3Charts from "../Charts/D3Chart";

export class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      tableColumns: tableColumn(),
      userData: [],
      viewModalData: "",
      viewModalOpen:false
    };
  }
  getUserDetails = async () => {
    try {
     
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (response.data) {
        const userData = response.data;
        const UserDetails = userData.map((obj, index) => {
          let updObj = { ...obj };
          updObj.srNo = index + 1;
          updObj.website=(<a href={obj.website} target="_blank" style={{textDecoration:"none"}}>{obj.website}</a>);
          updObj.city=obj.address.city;
          updObj.suite=obj.address.suite;
          updObj.street=obj.address.street;
          updObj.zipcode=obj.address.zipcode;
          updObj.action = (<Link onClick={() => this.onViewUserModal(obj)} style={{textDecoration:"none"}}>View</Link>);

          return updObj;
        });
        this.setState({
          userData: UserDetails
        });
      }
    } catch (e) {}
  };
  onViewUserModal =(obj) => {
    this.setState({
      viewModalOpen:true,
      viewModalData:obj
    });
  };
  
  viewModalClose=()=>{
    this.setState({
      viewModalOpen:false
    });
  }

  componentDidMount = () => {
    this.getUserDetails();
  };
  render() {
    const { viewModalOpen, viewModalData, viewTableColumns} = {
      ...this.state
    };
    return (
      <React.Fragment>
        {viewModalOpen ? (
          <ViewUserDetails
            OpenModal={true}
            viewModalData={viewModalData}
            viewTableColumn={viewTableColumns}
            handleClose={this.viewModalClose}
          />
        ) : (
          ""
        )}
        <Grid container spacing={4} justify="center" className="agentDashboard">
          <Grid item xs={12}>
            <div className="Calls_container">
            <MaterialTable
              style={{ minHeight: "450px" }}
              title={<Typography variant="h6" style={{fontWeight:"600"}}>User Details</Typography>}
              data={this.state.userData}
              columns={this.state.tableColumns}
              options={{
                search: true,
                selection: false,
                pagination: false,
                sorting: false,
                grouping: false,
                paging: false,
                showPagination: false,
                searchFieldAlignment: "right",
                headerStyle: {
                  pointerEvents: "none",
                  backgroundColor:"#ece7e7",
                  fontSize: "17px",
                  fontWeight: 600
                },
                searchFieldStyle: {
                  maxWidth: "186px"
                }
              }}
            />
            </div>
          </Grid>
          <div className="Calls_container">
              <D3Charts/>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default UserDetails;
