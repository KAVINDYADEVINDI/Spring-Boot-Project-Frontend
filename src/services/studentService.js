import axios from 'axios';

const USERS_REST_API_URL= "http://localhost:8080/api/students";

class studentService{
    getStudents(){
        axios.get(USERS_REST_API_URL);
       
       
    }
}
export default new studentService()