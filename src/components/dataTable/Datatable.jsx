import React, { useEffect, useState } from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,  } from "../../../datataleSource";
import { Link } from "react-router-dom";
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore";
import {db} from "../../firebase"

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
  const fetchData = async()=>{
    let list = []
    try{

      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({id : doc.id , ...doc.data()})
      });
      setData(list)
      console.log(list);
    } catch(err){
      console.log(err);
    }

  }
  fetchData()
  },[])

  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    }catch(err){
     console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 550, width: "90%" }} className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default Datatable;
