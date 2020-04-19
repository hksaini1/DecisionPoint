import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MaterialTable from "material-table";
import axios from 'axios';
import { ViewTableColumn } from "./viewModalTableColumns";

class ViewModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ViewTableColumns:ViewTableColumn(),
      loading:true
    }
  }
  getUserDetailsById =async()=>{
    try{
      const id=this.props.viewModalData.id;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      if(response.data){
        this.setState({
        viewData: response.data,
      });
      }
    }
    catch(err){

    }
  }
  componentDidMount(){
    this.getUserDetailsById();
  }
  render(){
  const { OpenModal, viewModalData ,Name} = { ...this.props };
  return (
    <React.Fragment>
      <Dialog
        fullWidth="true"
        maxWidth="sm"
        open={OpenModal}
        onClose={() => this.props.handleClose()}
        aria-labelledby="max-width-dialog-title"
       
      >
        <DialogTitle id="max-width-dialog-title">User <span style={{color:"red"}}>{this.props.viewModalData.name}</span> Details</DialogTitle>
        <DialogContent dividers>
           <Container>
            <Grid container spacing={2}>
              <MaterialTable
                style={{ width: "100%" }}
               // data={this.state.viewData}

                data={this.state.viewData }
  





                columns={this.state.ViewTableColumns}
                options={{
                  toolbar: false,
                  search: false,
                  selection: false,
                  pagination: false,
                  sorting: false,
                  grouping: false,
                  paging: false,
                  showPagination: false,
                  searchFieldAlignment: "right",
                  headerStyle: {
                    pointerEvents: "none"
                  },
                  searchFieldStyle: {
                    maxWidth: "186px"
                  }
                }}
              />
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => this.props.handleClose()}
            color="primary"
            className="btn-2"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
   }
};

export default ViewModal;
