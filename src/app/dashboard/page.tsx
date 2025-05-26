import { createClient } from "@/utils/supabase/server";
import { createNote } from "./action";
import DeleteButton from "@/components/DeleteButton";

const DashboardPage = async () => {
  const supabase = await createClient();
  const { data: todos } = await supabase.from("todos").select("*");
  return (
    <div>
      <form action={createNote}>
        <input type="text" name="task" placeholder="Digite sua anotação..." />
        <button type="submit" className="bg-gray-50 cursor-pointer text-black">Criar</button>
      </form>
      {todos?.map((todo) => (
        <div key={todo.id} className="flex ">
            <h2>{todo.task}</h2>
            <DeleteButton id={todo.id}/>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
