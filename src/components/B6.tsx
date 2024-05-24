import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

export default function B6() {
  return (
    <>
    <Button variant="primary">Lưu
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="secondary">Hủy
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="success">Thành công
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="warning">Cảnh báo
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="danger">Báo lỗi
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="info">Thông tin
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>{' '}
    <Button variant="link">Đường dẫn
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    </Button>
    </>
  )
}
