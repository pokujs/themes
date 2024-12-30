import type React from 'react';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, CREATE_USER } from './graphql/queries';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserFormData {
  name: string;
  email: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
  });

  const { loading, error, data } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await createUser({ variables: { input: formData } });
      setUsers((prevUsers) => [...prevUsers, data.createUser]);
      setFormData({ name: '', email: '' });
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>User Management</h1>
      <form onSubmit={handleSubmit} className='mb-6'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Name'
          className='border p-2 mr-2'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
          className='border p-2 mr-2'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Add User
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} className='mb-2'>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
