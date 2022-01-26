import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  FormRow,
  Input,
  InputGroup,
  Label,
  Row,
  Table,
} from '@levco/shared-components'
import { useState } from 'react'

function App() {
  const [coordinates, setCoordinates] = useState(true)

  return (
    <Container fluid className="py-5">
      <Card title="Search By" expandable className="mb-3" open={false}>
        <Row>
          <Col md={4} className="border-end">
            <header className="d-flex align-items-center">
              <h3 className="h6">Location</h3>
              <div className="ms-auto">
                <FormGroup check inline>
                  <Input
                    id="coordinates"
                    type="radio"
                    checked={coordinates}
                    onChange={() => setCoordinates(true)}
                  />
                  <Label htmlFor="coordinates" check className="mb-0">
                    Coordinates
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input
                    id="state"
                    type="radio"
                    checked={!coordinates}
                    onChange={() => setCoordinates(false)}
                  />
                  <Label htmlFor="state" check className="mb-0">
                    State
                  </Label>
                </FormGroup>
              </div>
            </header>
            {coordinates ? (
              <>
                <FormRow label="Latitude/Longitude" required stacked>
                  <Input />
                </FormRow>

                <FormRow label="Radius" required stacked>
                  <InputGroup>
                    <Input type="number" />
                    <Input type="select">
                      <option>km</option>
                    </Input>
                  </InputGroup>
                </FormRow>
              </>
            ) : (
              'TODO'
            )}
          </Col>

          <Col md={4}>
            <h3 className="h6">Asset Class</h3>

            <FormRow label="Asset Type" stacked>
              <Input type="select">
                <option value="" disabled selected hidden>
                  Choose asset type
                </option>
                <option>TODO</option>
              </Input>
            </FormRow>

            <FormRow label="Zoning" stacked>
              <Input type="select">
                <option value="" disabled selected hidden>
                  Choose land use
                </option>
                <option>TODO</option>
              </Input>
            </FormRow>
          </Col>

          <Col md={4}>
            <h3 className="h6">Other</h3>

            <FormRow label="Loan Amount" stacked>
              <div className="d-flex align-items-center text-muted">
                <Input className="w-auto" size={6} />
                <span className="px-2">to</span>
                <Input className="w-auto" size={6} />
                <span className="ps-2">millions</span>
              </div>
            </FormRow>

            <FormRow label="Units Range" stacked>
              <div className="d-flex align-items-center text-muted">
                <Input className="w-auto" size={6} />
                <span className="px-2">to</span>
                <Input className="w-auto" size={6} />
              </div>
            </FormRow>
          </Col>
        </Row>

        <hr />
        <div className="d-flex justify-content-between">
          <Button color="link">Clear search</Button>
          <Button color="primary">Search</Button>
        </div>
      </Card>

      <Row>
        <Col xl={6}>
          <Card
            title="Most Active Lenders"
            controls={<small className="text-muted">Source Reonomy</small>}
            className="mb-3"
            bodyClassName="p-0"
          >
            <Table
              columns={[
                {
                  key: 'selected',
                  cell: () => <Input type="checkbox" />,
                  sortable: false,
                  width: '3rem'
                },
                {
                  key: 'lenderName',
                  header: 'Lender Name',
                  cell: () => '-',
                },
                {
                  key: 'type',
                  header: 'Type',
                  cell: () => '-',
                },
                {
                  key: 'loanAmount',
                  header: 'Total Loan Amount',
                  cell: () => '-',
                },
                {
                  key: 'numberOfloans',
                  header: 'Total Loan Amount',
                  cell: () => '-',
                },
              ]}
              rows={['TODO', 'TODO', 'TODO', 'TODO', 'TODO']}
            />
          </Card>
        </Col>
        <Col xl={6}>
          <Card
            title="Lender on Similar Lev Deals"
            controls={<small className="text-muted">Source Lev</small>}
            className="mb-3"
            bodyClassName="p-0"
          >
            <Table
              columns={[
                {
                  key: 'selected',
                  cell: () => <Input type="checkbox" />,
                  sortable: false,
                  width: '3rem'
                },
                {
                  key: 'lenderName',
                  header: 'Lender Name',
                  cell: () => '-',
                },
                {
                  key: 'dealName',
                  header: 'Deal Name',
                  cell: () => '-',
                },
                {
                  key: 'placementStatus',
                  header: 'Placement Status',
                  cell: () => '-',
                },
                {
                  key: 'loanAmount',
                  header: 'Loan Amount',
                  cell: () => '-',
                },
                {
                  key: 'loanType',
                  header: 'Total Loan Amount',
                  cell: () => '-',
                },
              ]}
              rows={['TODO', 'TODO', 'TODO', 'TODO', 'TODO']}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
