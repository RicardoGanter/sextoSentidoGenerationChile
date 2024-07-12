export const Fetch = async (url, method, data) => {
    try {
      if (data) { 
        const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }); 
        if (response) { 
        return response 
        } else {
        throw new Error(response.message);
        }
        }
        if(!data){ 
            const response = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json'
              } 
            }); 
            if (response) { 
              return response;
            } else {
              throw new Error(response.message);
            } 
        }
    } catch (error) {
      console.log(error)
    }
    };