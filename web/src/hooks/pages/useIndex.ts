import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { api } from "../../services/api";


export function useIndex() {
    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
    const [notification, setNotification] = useState('')

    useEffect(() => {
        api.get('/teachers')
        .then(response => {
            setTeachers(response.data)
        })
    }, [])

    useEffect(() => {
        clearForm()
    }, [selectedTeacher])

    function registerCourse() {
        if (selectedTeacher !== null && validateCourseData()) {
            api.post(`/teachers/${selectedTeacher.id}/courses`, {
                name,
                email
            })
            .then(() => {
                setSelectedTeacher(null)
                setNotification('Cadasttro realizado!')
            })
            .catch((e) => {
                setNotification(e.response?.data.message)
            })
        } else {
            setNotification('Preencha os dados corretamente!')
        }
    }

    function validateCourseData() {
        return name.length > 0 && email.length > 0
    }

    function clearForm() {
        setName('')
        setEmail('')
    }

    return {
        teachers,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        notification,
        setNotification,
        registerCourse
    }
}