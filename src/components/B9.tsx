import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

export default function B9() {
  return (
    <>
     <Form>
      <h1 style={{textAlign:'center'}}>Đăng ký tài khoản</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập Mật khẩu" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type='name' placeholder="Ví dụ: Nguyễn Văn A" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Ví dụ: Mai dịch, Hà Nội" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Thành phố</Form.Label>
          <Form.Select>
            <option>Hà Nội</option>
            <option>TP. HCM</option>
            <option>Đà Nẵng</option>
            <option>Nghệ An</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Quận</Form.Label>
          <Form.Select>
            <option>Mai Dịch</option>
            <option>Thanh Xuân</option>
            <option>Đống Đa</option>
            <option>Cầu Giấy</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Mã bưu điện</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <div style={{textAlign:'center'}}>
        <Button variant="primary" size='lg' style={{width:'500px'}}>
            Submit
        </Button>
      </div>
    </Form>
    </>
  )
}
