fetch('https://pingala.iitk.ac.in/IITK-0/logincheck')
  .then(response => {
    if (response.ok) {
      
      return response.text();
    } else {
      
      throw new Error('Request failed with status code ' + response.status);
    }
  })
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
