function Ex3() {
    return (
        <div className="container">

            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                </div>
                <div className="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
                </div>
                <div className="form-check mb-3">
                    <label class="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"> Remember me</input>
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}

export default Ex3;