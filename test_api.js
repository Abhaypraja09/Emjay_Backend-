const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsImlhdCI6MTc3NDM0ODQwNywiZXhwIjoxNzc2OTQwNDA3fQ.iHK9ilokI3X1pZ6Z3_gxn5Zmz5wIwL9wm7FOY2AgRwI';
const id = '69c27cf846e0dd721451145a';

const test = async () => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/production/${id}/adjust`, 
            { amount: 10, type: 'add' },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Success:', res.data);
    } catch (error) {
        console.log('Status:', error.response?.status);
        console.log('Data:', error.response?.data);
    }
};

test();
