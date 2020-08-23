import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import SalesAnalytics from './SalesAnalytics';
import LineApexChart from '../AllCharts/apex/chartapex';
import PieChart from '../AllCharts/chartjs/piechart';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Saadabot', link: '#' },
        { title: 'Dashboard', link: '#' },
      ],
      reports: [
        {
          icon: 'ri-stack-line',
          title: 'Number of Sales',
          value: '1452',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-store-2-line',
          title: 'Sales Revenue',
          value: '$ 38452',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-briefcase-4-line',
          title: 'Average Price',
          value: '$ 15.4',
          rate: '2.4%',
          desc: 'From previous period',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Dashboard"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Time-Transactions Status
                    </CardTitle>
                    <LineApexChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Transactions Status</h4>
                    <PieChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <SalesAnalytics />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
