import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBPagination,
  MDBAccordionItem,
  MDBPaginationLink,
  MDBPaginationItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);

  const sortOptions = ["name", "address", "email"];
  useEffect(() => {
    loadUsersData(0, 4, 0);
  }, []);
  const loadUsersData = async (start, end, increase) => {
    return await axios
      .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
      .then((response) => {
        setData(response.data);
        setCurrentPage(currentPage + increase);
      })
      .catch((err) => console.log(err));
  };
  console.log(data);

  const handleReset = () => {
    loadUsersData();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:5000/users?q=${value}`)
      .then((response) => {
        setData(response.data);

        setValue("");
      })
      // .catch((err) => console.log(err));
  };
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      // .catch((err) => console.log(err));
  };
  const renderPagination = () => {
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUsersData(4, 8, 1)}>NEXT</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUsersData(currentPage - 1 , currentPage * 4, -1)
              }
            >
              previous
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
          <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUsersData((currentPage + 1) * 4, (currentPage + 2) * 4, 1)
              }
            >
              NEXT
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUsersData(4, 8, 1)}>previous</MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      );
    }
  };
  return (
    <MDBContainer>
    
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          marginLeft: "67%"
        }}
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtn type="submit" color="dark">
          search
        </MDBBtn>
        <br/>
        <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
          Reset
        </MDBBtn>
     

      </form>
      <MDBRow>
        <MDBCol size="8">
          <h4>Sort By:</h4>
          <select
            style={{ width: "50%", borderRadius: "2px", height: "35px" }}
            onChange={handleSort}
            value={sortValue}
          >
            <option>please select value</option>
            {sortOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </MDBCol>
       
      </MDBRow>
      <div style={{ marginTop: "100px" }}>
      <Link to="/">
                  <MDBBtn className="mx-2" color="info" >
          Back
        </MDBBtn>
        </Link>
        <h1 style={{textAlign:"center"}}>Form Data</h1>
        <MDBRow>
          <MDBCol>
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">number</th>
                  <th scope="col">address</th>
                  <th scope="col">status</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      no data found{" "}
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.status}</td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          {renderPagination()}
        </div>
      
      </div>
    </MDBContainer>
  );
};

export default Dashboard;
