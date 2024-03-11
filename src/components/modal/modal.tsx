import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="relative w-auto max-w-md mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg">
              <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
                <h3 className="text-lg font-semibold">Success</h3>
                <button
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  onClick={handleClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-5">Succesful Payment</div>
              <div className="flex items-center justify-end px-5 py-4 bg-gray-50 border-t border-gray-200 rounded-b">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
