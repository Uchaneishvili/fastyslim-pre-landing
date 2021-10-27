import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ModalPage.css";

function ModalPage() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  return (
    <div>
      <Modal
        style={{ overlay: { zIndex: 1000 } }}
        className="Modal add-modal"
        id="modal-form"
        ariaHideApp={false}
        isOpen={modalIsOpen}
      >
        <div className="modal-dialog create-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Question 1
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setmodalIsOpen(false)}
              />
            </div>

            <div className="modal-body">
              <div className="popup">
                <div className="category-buttons-add-container">
                  <div className="label-category-container">
                    <label className="label-category-buttons">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </label>
                  </div>

                  <div className="radio-container">
                    <div className="line-radio-container">
                      <div>
                        <div>
                          <input
                            type="radio"
                            id="huey"
                            name="drone"
                            value="huey"
                          />
                          <label htmlFor="huey">Huey</label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            id="dewey"
                            name="drone"
                            value="dewey"
                          />
                          <label htmlFor="dewey">Dewey</label>
                        </div>
                      </div>
                    </div>

                    <div className="line-radio-container">
                      <div>
                        <div>
                          <input
                            type="radio"
                            id="dewey"
                            name="drone"
                            value="dewey"
                          />
                          <label htmlFor="dewey">Dewey</label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            id="louie"
                            name="drone"
                            value="louie"
                          />
                          <label htmlFor="louie">Louie</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="progress progress-bar-container">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>{" "}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary close"
                data-bs-dismiss="modal"
                onClick={() => setmodalIsOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary save-changes"
                //   onClick={addAdvertisement}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPage;
