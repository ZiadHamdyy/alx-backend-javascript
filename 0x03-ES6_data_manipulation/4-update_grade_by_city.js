function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((student) => student.location === city).map((student) => {
    const updatedStudent = { ...student };
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeObj) {
      updatedStudent.grade = gradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });
}
export default updateStudentGradeByCity;
