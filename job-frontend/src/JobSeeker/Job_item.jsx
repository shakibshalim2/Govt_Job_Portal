import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import classes from './Modalf.module.css';

function Jobitem({ item, jobApply }) {
  return (
    <Card className="mb-4" style={{ width: '15rem', height:"90%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src="/images/jobImage.png" className={classes.images} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className={classes.description}>{item.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <div className="d-flex justify-content-between">
            <span className="badge bg-primary">Full time</span>
            <span className="badge bg-primary">BCS Only</span>
          </div>
        </ListGroupItem>
        <ListGroupItem>{item.category}</ListGroupItem>
        <ListGroupItem className={classes.deadlines}>
          Apply From: <span className={classes.dates}>{item.startDate}</span>
        </ListGroupItem>
        <ListGroupItem className={classes.deadlines}>
          Apply Before: <span className={classes.dates}>{item.endDate}</span>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        {!item.status ? (
          <Button variant="primary" onClick={() => jobApply(item)}>Apply Now</Button>
        ) : (
          <Button variant="secondary" disabled>{item.status}</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Jobitem;
