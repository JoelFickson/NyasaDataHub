import DatabaseOps from "@config/database/DatabaseOps";

class AgricultureRepository extends DatabaseOps implements SchoolInterfaceRepository {
  async createSchool(school: School): Promise<School> {
    return this.createRecord("schools", school);
  }

  getSchoolById(schoolId: string): Promise<School> {
    return this.selectRecord<School>("schools", "id", schoolId);
  }

  getSchools(): Promise<School[]> {
    return this.selectRecordsWithoutCondition<School>("schools");
  }

  updateSchool(school: School): Promise<School> {
    return this.updateRecord<School>("schools", school.id, school);
  }

}

export default AgricultureRepository;