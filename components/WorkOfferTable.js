import React from "react";
import { Table } from "react-bootstrap";
import styles from "../styles/WorkTable.module.css";

function WorkOfferTable({ id, title, requirements }) {
  return (
    <div className={styles.workTable} id={id}>
      <h4>{title}</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Wymagania</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req) => {
            return (
              <tr key={req}>
                <td>{req}</td>
              </tr>
            );
          })}
          <tr>
            <td> samodzielność w realizacji powierzonych zadań</td>
          </tr>
          <tr>
            <td>zaangażowanie w pracę</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default WorkOfferTable;
