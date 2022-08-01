function Ex4() {
    return (
        <div className="Ex4">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="upper">
                        <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"></img> 
                    </div>
                    <div class="user text-center">
                        <div class="profile">
                            <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"></img> 
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h4 className="mb-0">Benjamin Tims</h4>
                        <span className="text-muted d-block mb-2">Los Angles</span>
                        <button className="btn btn-primary btn-sm follow">Follow</button>
                        <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div className="stats">
                                <h6 className="mb-0">Followers</h6>
                                <span>8,797</span>
                            </div>
                            <div className="stats">
                                <h6 className="mb-0">Projects</h6>
                                <span>142</span>
                            </div>
                            <div className="stats">
                                <h6 className="mb-0">Ranks</h6>
                                <span>129</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ex4;