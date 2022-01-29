import React, { useContext, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import AuthContext from "../context/auth/authContext"
import Alerts from "../components/Alerts"
import FormErrorMsg from "../components/FormErrorMsg"




export default function Register() {

    const authContext = useContext(AuthContext)
    const { registerUser, message } = authContext

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Debes completar este campo"),
            email: Yup.string()
                .required("Debes completar este campo")
                .email("Debes ingresar un email válido"),
            password: Yup.string()
                .required("Debes completar este campo")
                .min(6, "El password debe contener al menos 6 caracteres")
        }),
        onSubmit: values => {
            registerUser(values)
        }
    })

    return (
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear Cuenta</h2>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <form onSubmit={formik.handleSubmit} className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-black text-sm font-bold mb-2">Nombre</label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                placeholder="Ingrese su nombre"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && <FormErrorMsg message={formik.errors.name} />}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                placeholder="Ingrese su email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && <FormErrorMsg message={formik.errors.email} />}
                            {message && message.status == "400" && <FormErrorMsg message={message.msg} />}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña</label>
                            <input
                                type="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                placeholder="Ingrese una contraseña"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && <FormErrorMsg message={formik.errors.password} />}
                        </div>

                        <input type="submit"
                            value="Crear Cuenta"
                            className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                        />
                        {message && message.status == "200" && <Alerts color="green" />}
                    </form>
                </div>
            </div>
        </div>
    )
}
