import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function B2() {
  return (
    <>
    <InputGroup size="lg">
    <Form.Control
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder='Input cỡ lớn'
    />
    </InputGroup>
    <br />
    <InputGroup className="mb-3">
    <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder='Input cỡ trung bình'
    />
    </InputGroup>
    <br />
    <InputGroup size="sm" className="mb-3">
    <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        placeholder='Input cỡ bé'
    />
    </InputGroup>
    </>
  )
}
