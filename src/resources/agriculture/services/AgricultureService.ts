import AgricultureRepository from "../repositories/AgricultureRepository";

class AgricultureService extends AgricultureRepository {

  
  getSchoolById(schoolId: string): Promise<School> {
    return this.selectRecord<School>("schools", "id", schoolId);
  }


}

export default AgricultureService;