import React from 'react';
import { Link } from 'react-router-dom';

const DnDPage = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Choose Your Path</h1>
        <p className="lead text-muted">Are you running the game or playing a hero?</p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* DM Option */}
        <div className="col-12 col-md-5">
          <div className="card h-100 shadow-lg border-0 transition-hover">
            <div className="card-body text-center p-5">
              <div className="display-1 mb-3 text-primary">
                <i className="bi bi-book-half"></i> {/* Bootstrap Icon placeholder */}
              </div>
              <h2 className="card-title fw-bold">Dungeon Master</h2>
              <Link to="/dm" className="btn btn-primary btn-lg w-100">
                Draw a Quest!
              </Link>
            </div>
          </div>
        </div>

        {/* Player Option */}
        <div className="col-12 col-md-5">
          <div className="card h-100 shadow-lg border-0 transition-hover">
            <div className="card-body text-center p-5">
              <div className="display-1 mb-3 text-danger">
                ⚔️
              </div>
              <h2 className="card-title fw-bold">Player</h2>
              <Link to="/player" className="btn btn-danger btn-lg w-100">
                Roll for Initiative!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DnDPage;