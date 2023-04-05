import axios from 'axios';

class ApiService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.escuelajs.co',
      timeout: 1000,
    });
  }

  async getProducts() {
    try {
      const response = await this.apiClient.get('/api/v1/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;

