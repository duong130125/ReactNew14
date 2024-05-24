import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function B4() {
  return (
    <>
    <DropdownButton id="dropdown-basic-button" title="Nguyễn Đình Dương">
        <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
    </DropdownButton>
    </>
  )
}
