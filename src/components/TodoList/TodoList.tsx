import { FC, memo } from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[] | null,
  onTodoSelect: (todo: Todo) => void,
  selectedId?: number,
};

export const TodoList: FC<Props>
= memo(({ todos, onTodoSelect, selectedId }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {
        todos?.map(todo => (
          <tr
            key={todo.id}
            data-cy="todo"
            className=""
          >
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p className={cn({
                'has-text-success': todo.completed,
                'has-text-danger': !todo.completed,
              })}
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                onClick={() => onTodoSelect(todo)}
                data-cy="selectButton"
                className="button"
                type="button"
              >
                <span className="icon">
                  {
                    selectedId === todo.id
                      ? <i className="far fa-eye-slash" />
                      : <i className="far fa-eye" />
                  }
                </span>
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
));