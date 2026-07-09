export const signupUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    return { error: "User already exists" };
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) return { error: "Invalid credentials" };

  localStorage.setItem("currentUser", email);
  return { success: true };
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return localStorage.getItem("currentUser");
};
