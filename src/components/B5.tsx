import React from 'react'
import { Alert } from 'react-bootstrap'

export default function B5() {
  return (
    <>        
    <Alert variant={'info'} dismissible>
        Thêm tài khoản thành công.
    </Alert>
    <Alert variant={'danger'} dismissible>
        Thên mới tài khoản thất bại.
    </Alert>
    <Alert variant={'warning'} dismissible>
        Tên không được để trống.
    </Alert>
    </>
  )
}
