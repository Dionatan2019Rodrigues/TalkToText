"use client";

import { deleteNote } from "@/app/dashboard/action";
import { useState } from "react";

type Props = {
  id: number;
};

const DeleteButton = ({ id }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteNote(id);
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Botão de deletar */}
      <button
        onClick={handleDeleteClick}
        className="
          group relative flex items-center justify-center
          px-4 py-2 rounded-lg
          bg-gradient-to-br from-red-500 to-red-600
          text-white font-medium
          shadow-md hover:shadow-lg
          transition-all duration-200
          hover:from-red-600 hover:to-red-700
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
          overflow-hidden
        "
        aria-label="Apagar nota"
        disabled={isDeleting}
      >
        <span className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          Apagar
        </span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
      </button>

      {/* Modal de confirmação */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                Confirmar exclusão
              </h3>
              <div className="mt-4 text-sm text-gray-500">
                <p>Tem certeza que deseja excluir esta nota?</p>
                <p className="mt-2 font-semibold">Esta ação não pode ser desfeita.</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleCancelDelete}
                className="
                  px-4 py-2 rounded-md
                  bg-gray-200 text-gray-800 font-medium
                  hover:bg-gray-300
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-gray-500
                "
                disabled={isDeleting}
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="
                  px-4 py-2 rounded-md
                  bg-red-600 text-white font-medium
                  hover:bg-red-700
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  flex items-center justify-center
                  min-w-[100px]
                "
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Excluindo...
                  </>
                ) : (
                  'Confirmar'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;