const getAuthHeaders = (token?: string) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
};

export { getAuthHeaders };
