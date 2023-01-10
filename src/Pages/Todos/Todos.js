import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../../services/TodosAction";

const Todos = () => {
  const alltodos = useSelector((state) => state);
  const dispatch = useDispatch();
  const { error, isLoading, todos } = alltodos;

  const alldata = todos?.slice(0, 20);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl my-3 font-bold">My Todos App </h1>

      {isLoading && <h1>Loading....</h1>}

      {error && (
        <h1 className="text-red-300 text-2xl font-semibold"> {error} </h1>
      )}

      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 my-3">
          {alldata?.map((user) => {
            return (
              <div
                key={user.id}
                className="shadow-xl border-4 border-emerald-500 px-4 py-2 rounded-xl"
              >
                <h1 className="text-lg text-center font-semibold my-2">
                  {user.id}
                </h1>
                <p className="text-md text-center font-bold">{user.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Todos;
