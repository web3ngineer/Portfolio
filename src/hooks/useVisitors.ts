// hooks/useVisitorData.js
import { useEffect } from 'react';

const useVisitorData = () => {
    useEffect(() => {
        const sendVisitorData = async () => {
          try {
            const response = await fetch('/api/visitors', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                // You can add more data here if needed
              }),
            });
    
            if (!response.ok) {
              const errorData = await response.json();
              console.error('Failed to save visitor data:', errorData);
            } else {
              console.log('Visitor data saved successfully');
            }
          } catch (error) {
            console.error('Error sending visitor data:', error);
          }
        };
    
        sendVisitorData();
      }, []);
};

export default useVisitorData;