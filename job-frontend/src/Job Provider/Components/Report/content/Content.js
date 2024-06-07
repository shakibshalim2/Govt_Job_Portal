import React from "react";
import {
  FormGroup,
  FormControl,
  Col,
  Row,
  Table,
  Container,
  FormLabel,
} from "react-bootstrap";
import classes from "./Content.module.css";
import { useState, useEffect } from "react";
import useTable from "../../../../hooks/useTable";
import { CSVLink } from "react-csv";
import axios from "axios";
import Config from "../../../../config/Config.json";

function Reports() {
  const [reportsData, setReportsData] = useState([]);

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(reportsData, page, 5);

  useEffect(() => {
    const fetchTd = async () => {
      const res = await axios.get(`${Config.SERVER_URL + "provider/jobs/"}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const updatedList = [...res.data.jobs];
      setReportsData(updatedList);
    };
    fetchTd();
  }, []);
  
  const Jobs = [...reportsData];

  const headers = [
    {
      label: "JobId",
      key: "jobId",
    },
    {
      label: "ProviderId",
      key: "providerId",
    },
    {
      label: "Title",
      key: "title",
    },
  ];

  const csvLink = {
    headers: headers,
    data: Jobs,
    filename: "csvfile.csv",
  };

  return (
    <>
      <Container>
        <Row className={classes.rowStyle}>
          <Col className={`${classes.repo} col-md-3`}>
            <span className={classes.span11}>Reports</span>
          </Col>
        </Row>

        <div className={classes.tableBox}>
          <Table striped hover>
            <thead>
              <tr className={classes.tableHeader}>
                <th>Title</th>
                <th>description</th>
                <th>Category</th>
                <th>StartDate</th>
                <th>EndDate</th>
              </tr>
            </thead>
            <tbody className={classes.tableBody}>
              {slice.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.title}</td>
                  <td>{contact.description}</td>
                  <td>{contact.category}</td>
                  <td>{contact.startDate}</td>
                  <td>{contact.endDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
export default Reports;
