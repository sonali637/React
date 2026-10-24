import AppName from "./components/AppName";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button class="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">20/08/2026</div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Go To Collage</div>
          <div class="col-4">05/10/2026</div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
