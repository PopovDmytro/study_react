export const ToDoItem = ({
													 id,
													 done,
													 children,
													 onDelete,
													 onCheckboxChange
												 }) => {

	return (
		<li className="item">
			<label htmlFor={id}>
				<input type="checkbox"
							 id={id}
							 defaultChecked={done}
							 onChange={(e) => (onCheckboxChange(e, id) )} />
				<span>{children}</span>
			</label>
			<button className="delete-item" onClick={onDelete} >&#10005;</button>
		</li>
	);
};

