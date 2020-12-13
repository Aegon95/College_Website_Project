import http from "../../utils/axios";

class SemesterDataService {
    getAll() {
        return http.get("/semesters").then(response => {
            return response.data
        }).then(data=> data);
    }

    get(id:string){
        return http.get(`/semesters/${id}`);
    }

    create(data:object) {
        return http.post("/semesters", data);
    }

    update(id: string, data: object) {
        return http.put(`/semesters/${id}`, data);
    }

    delete(id: string) {
        return http.delete(`/semesters/${id}`);
    }


}

export default new SemesterDataService();
