"use client";

import { deleteNote } from "@/app/dashboard/action";

type Props = {
  id: number;
};

const DeleteButton = ({id} : Props) => {
  return <button className="bg-red-500 p-2 cursor-pointer" onClick={async()=>deleteNote(id)}>Apagar</button>;
};

export default DeleteButton;
