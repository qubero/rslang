import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [query, setQuery] = useSearchParams();
  const group = query.get('group') || '0';
  const page = query.get('page') || '0';

  return { group, page, setQuery };
};

export { useQueryParams };
