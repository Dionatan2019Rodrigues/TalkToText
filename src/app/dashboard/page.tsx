import { createClient } from "@/utils/supabase/server";
import { createNote } from "./action";

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
        <div key={todo.id}>
            <h2>{todo.task}</h2>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
