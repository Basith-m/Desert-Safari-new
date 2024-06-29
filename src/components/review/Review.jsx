import React from "react";
import './review.css'
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Review() {
  // the card data

  return (
    <>
      {/* 1 Container */}
      <Container className="review-container   w-75 mt-5 mb-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <span className="rating-text ms-3 me-2">Rating</span>
            <span className="rating-text me-2">Rating</span>
            <span className="rating-stars me-2">★★★★★</span>
            <span className="rating-score ">5.0</span>
          </div>
          <Button variant="success" className="review-button">
            Write review
          </Button>
        </div>
      </Container>
      {/*  end Container */}

      {/* 2 Container */}
      <Container className="mb-3">
        <div className="d-flex flex-wrap justify-content-center">
          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>

              <Card.Text className="mt-2">
                <span className="fw-bolder">Best Time I Had In My Trip -</span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>

              <Card.Text className="mt-2">
                <span className="fw-bolder">Amazing Experience - </span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>

              <Card.Text className="mt-2">
                <span className="fw-bolder">Amazing - </span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.build on the card title and make
                up
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
      {/* end Container */}

      {/* 3 Container */}
      <Container className="review-container w-75  mb-3">
        <div className="text-center fw-bolder">
          <span>MORE REVIEWS ON TRIP </span>
        </div>
      </Container>
      
       {/* end Container */}
    </>
  );
}

export default Review;