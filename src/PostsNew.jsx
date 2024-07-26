export function PostsNew() {
  return (
    <div>
      <h1>New Post</h1>
      <form>
        <div className="mb-3">
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div className="mb-3">
          Image: <input className="form-control" name="iamge" type="text" />
        </div>
        <div className="mb-3">
          Body: <input className="form-control" name="body" type="text" />
        </div>

        <button type="button" className="btn btn-outline-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}
