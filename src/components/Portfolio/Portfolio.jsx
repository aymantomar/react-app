import React from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="title mt-4 darkTitle text-center">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className="position-relative">
            <span>
              <i class="fa-solid fa-star px-3 z-1"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-5 portfolio">
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img1}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img1} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img2}
              data-bs-toggle="modal"
              data-bs-target="#exampleModa2"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModa2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img2} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img3}
              data-bs-toggle="modal"
              data-bs-target="#exampleModa3"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModa3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img3} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img1}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img1} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img2}
              data-bs-toggle="modal"
              data-bs-target="#exampleModa2"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModa2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img2} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <img
              src={img3}
              data-bs-toggle="modal"
              data-bs-target="#exampleModa3"
              className="w-100 rounded rounded-3"
              alt=""
            />

            <div
              className="modal fade"
              id="exampleModa3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img src={img3} className="w-100" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
