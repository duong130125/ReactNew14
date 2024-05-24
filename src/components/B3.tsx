import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function B3() {
  return (
    <>
    <div style={{display:'flex',gap:'20px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.tgdd.vn/Products/Images/5698/317540/asus-aio-a3402wbak-i3-wa549w-thumb-1-600x600.jpg" />
      <Card.Body>
        <Card.Title>Gameming Home</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Xem chi tiết</Button>
        <span style={{marginLeft:'50px'}}>50.000.000 đ</span>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hoanglongcomputer.vn/media/product/250-146-4b.jpg" />
      <Card.Body>
        <Card.Title>Asus Book</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Xem chi tiết</Button>
        <span style={{marginLeft:'50px'}}>30.000.000 đ</span>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
