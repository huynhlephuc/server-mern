import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json( {messages: error.message} );
    }
}

export const    createStudent = async (req, res) => {
    const student = req.body;
console.log('student: ' , student);
    const newStudent = new StudentData(student);
    try {
        await  newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json( {messages: error.message} );
    }
}

export const    deleteStudent = async (req, res) => {
   console.log(req.params.id);
   try {
    await StudentData.findOneAndDelete({ _id: req.params.id });
    res.status(204).json("Xoa thanh cong");
   } catch (error) {
       console.log(error.message);
   }
}

