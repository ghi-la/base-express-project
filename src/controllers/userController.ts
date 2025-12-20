import jwt from 'jsonwebtoken';

export const fakeLogin = (req: any, res: any) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }
  // In a real app, you'd verify user credentials here

  // Create a real JWT token
  const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });

  // Set token in HTTP-only cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  // Set token in Authorization header
  res.setHeader('Authorization', `Bearer ${token}`);

  res.json({ message: 'Login successful', token });
};
