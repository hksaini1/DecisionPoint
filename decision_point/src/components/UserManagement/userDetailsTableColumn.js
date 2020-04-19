
const columns=[
  {
    title:"Sr.No",
    field:'srNo'
  },
  {
    title: "Name",
    field: "name"
  },
    {
    title: "Username",
    field: "username"
  }, {
    title: "Email",
    field: "email"
  }, {
    title: "Phone",
    field: "phone"
  }, {
    title: "City",
    field: "city"
  },
  // {
  //   title: "Suite",
  //   field: "suite"
  // },{
  //   title: "Street",
  //   field: "street"
  // },{
  //   title: "Pin Code",
  //   field: "zipcode"
  // },
  {
    title: "Website",
    field: "website"
  },{
    title: "Company Name",
    field: "name"
  },
  {
    title:"Action",
    field:"action"
  }
]

const tableColumn=()=>{
    return columns
}

export{tableColumn};