export const fetchTableData = async () => {
  try {
    const response = await fetch('https://technical-task-api.icapgroupgmbh.com/api/table/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw error;
  }
};

export const saveDataToServer = async (data) => {
    try {
      const response = await fetch('https://technical-task-api.icapgroupgmbh.com/api/table/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
  
      return response;
    } catch (error) {
      throw new Error('Error saving data to server: ' + error.message);
    }
  };