import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import dummy from '../../assets/safari-car.jpg'
import './packageModal.css'

const PackageModal = ({ show, setShow, item }) => {

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>{item?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column gap-3'>
                    <img src={dummy} alt="" />
                    <ul>
                        {item?.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                        ))}
                    </ul>
                    {
                        item?.timing &&
                        <div className='d-flex flex-column gap-2'>
                            <h5>Timings</h5>
                            <ul>
                                {item?.timings?.map((service, idx) => (
                                    <li key={idx}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    }
                    <div className='tripCost-text'>
                        <span>{item?.cost}</span>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Book Now
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PackageModal;