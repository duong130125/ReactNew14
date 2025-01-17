import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export default function B8() {
  return (
    <>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Trang chủ">
        Đây là trang chủ.
      </Tab>
      <Tab eventKey="profile" title="Giới thiệu">
        Đây là trang giới thiệu.
      </Tab>
      <Tab eventKey="contact" title="Liên hệ">
        Đây là trang liên hệ.
      </Tab>
    </Tabs>
    </>
  )
}
