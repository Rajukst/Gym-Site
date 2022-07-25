import React, { useRef } from "react";
import Swal from "sweetalert2";
import {Button} from "react-bootstrap"
const AddClasses = () => {
    const GymName = useRef();
    const GymImage = useRef();
    const GymDetails = useRef();
    const GymFee = useRef();
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      const name = GymName.current.value;
      const image = GymImage.current.value;
      const description = GymDetails.current.value;
      const fee = GymFee.current.value;
      const subtotal = { name, image, fee, description };
      console.log(subtotal);
      fetch("http://localhost:5000/add-class", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(subtotal),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Gym Class Added !!",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
            console.log(data);
          }
        });
    };
  return (
    <div className="addProduct-image">
      <h1 className="pt-5"> Add a Gym Class</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={GymName}
          placeholder="Test Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={GymFee}
          placeholder="Test Fee"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={GymImage}
          placeholder=" Image or Image Url"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={GymDetails}
          placeholder="Some Description"
          required
        />
        <br />
        <br />
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Add Gym Classes
        </Button>
      </form>
    </div>
  );
};

export default AddClasses;
