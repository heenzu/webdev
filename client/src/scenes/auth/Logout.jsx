const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Logged out');
  };
  