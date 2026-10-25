function TodoItem2() {
  let todoName = "Go To Collage";
  let todoDate = "05/10/2026";
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger kg-row">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
