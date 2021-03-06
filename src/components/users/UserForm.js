import React from 'react';
//------------------------------------------------------------------------------
const UserForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input className="input" name="username" placeholder="Username"
          value={user.username || ''}
          onChange={handleChange}/>
        {errors.username && <small>{errors.username}</small>}

      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input className="input" name="email" placeholder="Email address"
          value={user.email || ''}
          onChange={handleChange}/>
        {errors.email && <small>{errors.email}</small>}

      </div>
      <div className="field">
        <label htmlFor="profile">Profile</label>
        <input className="input" name="profile" placeholder="Profile"
          value={user.profile || ''}
          onChange={handleChange}/>
        {errors.email && <small>{errors.email}</small>}

      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input type="password" className="input" name="password" placeholder="Password"
          onChange={handleChange}/>
        {errors.password && <small>{errors.password}</small>}

      </div>
      <div className="field">
        <label htmlFor="passwordConfirmation">Password confirmation</label>
        <input type="password" className="input" name="passwordConfirmation"
          placeholder="Password confirmation"
          onChange={handleChange}/>
        {errors.password && <small>{errors.password}</small>}
        {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}

      </div>
      <button className ="button">Submit</button>
    </form>
  );
};
//------------------------------------------------------------------------------
export default UserForm;
