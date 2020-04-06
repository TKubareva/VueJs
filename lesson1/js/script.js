new Vue({
    el: "#app",
    data: {
        course: {
            id: 1,
            theme: "Тематика курса",
            name: "Название курса" ,
            description: "Описание курса",
            date_start: new Date().getTime(),
            href: "/string/",
            student: [
                    { id: 1, name: "Тест", lastname: "Тестов",  surname: "Тестович"},
                    { id: 2, name: "Иван", lastname: "Иванов",  surname: "Иванович"}
                ]
            },

        newStudent: {
            name: '',
            lastname: '',
            surname: ''
        },
        counter: 0,
        show: false
    },
    computed: {
        StudentAll () {
            return this.course.student.length
        },
        localeDate() {
            return (new Date(this.course.date_start)).toLocaleDateString()
        },
    },
    methods: {
        addNewStudent () {
            if (this.newStudent.lastname.length >0) {
                this.course.student.push({
                    id: "new_" + (++this.counter),
                    name: this.newStudent.name,
                    lastname: this.newStudent.lastname,
                    surname: this.newStudent.surname,
                });
                this.show = false;
                this.newStudent = {
                    name: '',
                    lastname: '',
                    surname: ''
                }
            }
        },

        deleteStudent (userIndex) {
            this.course.student.splice(userIndex, 1)
        }
    },
    beforeDestroy () {},
    destroyed () {}
})