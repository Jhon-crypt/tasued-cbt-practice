function calculatePercentage(totalStudents: any, score: any): any {
    if (totalStudents <= 0) {
      throw new Error('0');
    }
  
    const passPercentage = (score / totalStudents) * 100;
    return passPercentage;
}

export default calculatePercentage