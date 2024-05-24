import React from 'react'
import { Toast } from 'react-bootstrap'

export default function B7() {
  return (
    <>
     <Toast>
      <Toast.Header>
        <strong className="me-auto">Cảnh báo</strong>
      </Toast.Header>
      <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
    </Toast>
    </>
  )
}
