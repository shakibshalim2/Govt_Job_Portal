import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import styles from './JobCards.module.css';
const JobCards = () => {
  const jobs = [
    { id: 1, title: 'DC Office Chattogram', openings: 7, code: 'DCCTG' },
    { id: 2, title: 'DC Office Manikganj', openings: 6, code: 'DCMANIKGANJ' },
    { id: 3, title: 'Bangladesh Karmachari Kallyan Board', openings: 10, code: 'BKB' },
    { id: 4, title: 'Customs, Excise & VAT Commissionerate, Rajshahi', openings: 10, code: 'CEVCR' },
    { id: 5, title: 'Taxes Zone-16, Dhaka', openings: 6, code: 'TAX16' },
    { id: 6, title: 'Civil Surgeon Office, Tangail', openings: 6, code: 'CSTANGAIL' }
  ];


  return (
    <Container className="mt-4">
      <Row>
        {jobs.map((job) => (
          <Col md={4} key={job.id} className="mb-4">
            <Card className={styles.cardContainer}>
              <Card.Img variant="top" src={"/images/jobImage.png"} className={styles.cardImage} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {job.title} ({job.code})
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  <strong>Openings:</strong> {job.openings}
                </Card.Text>
                <Button className={styles.cardButton}>See Openings</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobCards;
