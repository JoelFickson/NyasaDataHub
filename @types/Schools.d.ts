interface School {
    id: string,
    name: string,
    address: string,
    district: string,
    zone: string,
    school_type: 'Primary' | 'Secondary' | 'College' | 'University',
    school_category: 'Government' | 'Private' | 'Grant-aided',
}

interface SchoolInterfaceRepository {
    getSchools: () => Promise<School[]>;
    getSchoolById: (schoolId: string) => Promise<School>;
    createSchool: (school: School) => Promise<School>;
    updateSchool: (school: School) => Promise<School>;
}