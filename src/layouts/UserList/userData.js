/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { deleteUser } from "Redux/userAction";
import { editUser } from "Redux/userAction";

export default function data() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  debugger;
  const users = userList.users;

  const deleteRecord = (id) => {
    // debugger;
    navigate(`/users/${id}`);
    dispatch(deleteUser(id));
    navigate("/userList");
  };

  const EditRecord = (id) => {
    debugger;
    dispatch(editUser(id));
    navigate(`/AddUser`);
  };

  const User = ({ id, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {id}
      </MDTypography>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "id", accessor: "id", align: "left" },
      { Header: "name", accessor: "name", align: "left" },
      { Header: "email", accessor: "email", align: "center" },
      //   { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: users.map((user) => ({
      id: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={user.id}
            color="success"
            variant="gradient"
            size="sm"
            fontSize="14px"
          />
        </MDBox>
      ),
      name: <User name={user.name} email={user.email} />,
      email: (
        <MDBox ml={-1}>
          <User email={user.email} />
        </MDBox>
      ),
      action: (
        <>
          <MDBadge
            color="success"
            variant="gradient"
            fontWeight="medium"
            onClick={() => EditRecord(user.id)}
          >
            <EditIcon />
          </MDBadge>

          <MDBadge
            color="success"
            variant="gradient"
            fontWeight="medium"
            onClick={() => deleteRecord(user.id)}
          >
            <DeleteIcon />
          </MDBadge>
        </>
      ),
    })),
  };
}
