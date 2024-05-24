import React from 'react'
import { Button, Table } from 'react-bootstrap'

export default function B10() {
  return (
    <>
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lại Hoàng Nam</td>
            <td>Nam</td>
            <td>15/4/2005</td>
            <td>nam@gmail.com</td>
            <td>Hà Nam</td>
            <td>
            <Button variant="warning">
                Sửa
            </Button>{' '}
            <Button variant="danger">
                Xóa
            </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lại Hoàng Nam</td>
            <td>Nam</td>
            <td>6/12/2005</td>
            <td>nhat@gmail.com</td>
            <td>Hải Dương</td>
            <td>
            <Button variant="warning">
                Sửa
            </Button>{' '}
            <Button variant="danger">
                Xóa
            </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Phạm trung Hiếu</td>
            <td>Nam</td>
            <td>3/9/2004</td>
            <td>hieu@gmail.com</td>
            <td>Đắk Lắk</td>
            <td>
            <Button variant="warning">
                Sửa
            </Button>{' '}
            <Button variant="danger">
                Xóa
            </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}
