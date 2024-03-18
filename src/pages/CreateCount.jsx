
import { Link } from 'react-router-dom';
const CreateCount = () => {
    return (
        <div className="mt-12 md:mt-16 lg:mt-28 lg:mx-20">
            <div className="hero  ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Picture</span>
                  </label>
                  <input type="file"className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-600 text-white">Create account</button>
                </div>
              <p>If you have an account <Link to="/signin"><span className="text-blue-600 font-bold">Login</span></Link></p>
              </form>
            </div>
          </div>
        </div>
    );
};

export default CreateCount;