import http from "../../utils/axios";
import {Semester} from "../../Models/Semester";

class SemesterDataService {
    async getAll() : Promise<Semester []> {
        const response = await http.get("/semesters")
        return response.data;
    }

    get(id:string){
        return http.get(`/semesters/${id}`);
    }

    async create(data:Semester) : Promise<Semester> {
        const response = await http.post("/semesters", data);
        return response.data;
    }

    update(data: Semester) : Promise<Semester> {
        return http.put(`/semesters/${data.id}`, data);
    }

    async delete(id: string) : Promise<void> {
        const response = await http.delete(`/semesters/${id}`);
        return response.data;
    }


}

export default new SemesterDataService();
