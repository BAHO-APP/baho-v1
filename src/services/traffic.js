import { BASE_URL } from '../utils/api';

export const trackVisit = async () => {
  const isPageVisible = () => {
    return !document.hidden;
  };

  try {
    if (!isPageVisible()) return;

    const isFirstVisit = !sessionStorage.getItem('visited');

    if (isFirstVisit) {
      const response = await fetch(`${BASE_URL}/traffic`, { method: 'GET' });
      if (!response.ok) {
        console.log('Error occurred while handling traffic');
      }

      //   sessionStorage.setItem('visited', 'true');
    }
  } catch (error) {
    console.error('Error handling traffic:', error);
  }
};
