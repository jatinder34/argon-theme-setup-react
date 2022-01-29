import {
  Card,
  CardHeader,
  Container,
  Row,
  Button,
  FormGroup,
  Form,
  Input,
  Col,
  CardBody,
} from "reactstrap";
// core components
import HeaderWithoutCard from "components/Headers/HeaderWithoutCard.js";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <>
      <HeaderWithoutCard />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0 d-flex justify-content-between">
                <h3 className="mb-0">Add User</h3>
                <Link to="/admin/users">
                  <Button color="primary" size="sm">
                    {" "}
                    <i className="ni ni-bold-left"></i> Back
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input placeholder="Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input placeholder="name@example.com" type="email" />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="text-right">
                      <Link to="/admin/users">
                        <Button color="primary">Submit</Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddUser;
